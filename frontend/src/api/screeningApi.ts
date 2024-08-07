import axios from "axios";

const NEXT_PUBLIC_BACKEND_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_DOMAIN || "";

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
    const response = await axios.get(
      `${NEXT_PUBLIC_BACKEND_DOMAIN}/api/screen`,
      {
        params: { fullName, dateOfBirth, country },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error screening customer:", error);
    throw new Error("Failed to screen customer");
  }
};
