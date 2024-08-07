import dotenv from "dotenv";

dotenv.config();

export const OFAC_API_KEY = process.env.OFAC_API_KEY as string;
export const PORT = process.env.PORT || 3000;
export const FRONTEND_URL = process.env.FRONTEND_URL as string;
export const OFAC_API_URL = "https://api.ofac-api.com/v4/screen";
