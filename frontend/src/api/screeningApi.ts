import axios from "axios";

interface ScreeningResult {
  nameHit: boolean;
  dobHit: boolean;
  countryHit: boolean;
}

export const screenCustomer = async (
  fullName: string,
  dateOfBirth: string,
  country: string
): Promise<ScreeningResult> => {
  try {
    const response = await axios.get("http://localhost:4000/api/screen", {
      params: { fullName, dateOfBirth, country },
    });
    return response.data;
  } catch (error) {
    console.error("Error screening customer:", error);
    throw new Error("Failed to screen customer");
  }
};
