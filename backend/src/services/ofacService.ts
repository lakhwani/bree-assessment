import axios from "axios";
import { ScreeningResult, OfacApiResponse } from "../types";
import { OFAC_API_URL, OFAC_API_KEY } from "../config/env";

export const screenCustomerOfac = async (
  fullName: string,
  dateOfBirth: string,
  country: string
): Promise<ScreeningResult> => {
  try {
    const response = await axios.post<OfacApiResponse>(
      OFAC_API_URL,
      {
        apiKey: OFAC_API_KEY,
        minScore: 95,
        sources: ["SDN"],
        types: ["person"],
        cases: [
          {
            name: fullName,
            dob: dateOfBirth,
            type: "individual",
            citizenship: country,
            nationality: country,
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const { results } = response.data;
    console.log(JSON.stringify(results, null, 2));

    if (results.length === 0) {
      return { nameHit: false, dobHit: false, countryHit: false };
    }

    const firstResult = results[0];
    const hasMatches = firstResult.matchCount > 0;

    if (!hasMatches) {
      return { nameHit: false, dobHit: false, countryHit: false };
    }

    return {
      nameHit: firstResult.matches.some((match) =>
        match.matchSummary.matchFields.some(
          (field) => field.fieldName.toLowerCase() === "name"
        )
      ),
      dobHit: firstResult.matches.some((match) =>
        match.matchSummary.matchFields.some(
          (field) => field.fieldName.toLowerCase() === "dob"
        )
      ),
      countryHit: firstResult.matches.some((match) =>
        match.matchSummary.matchFields.some(
          (field) =>
            field.fieldName.toLowerCase() === "citizenship" ||
            field.fieldName.toLowerCase() === "nationality"
        )
      ),
    };
  } catch (error) {
    console.error("Error screening customer:", error);
    throw new Error("Failed to screen customer");
  }
};
