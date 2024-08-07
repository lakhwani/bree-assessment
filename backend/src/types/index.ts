export interface ScreeningResult {
  nameHit: boolean;
  dobHit: boolean;
  countryHit: boolean;
}

export interface OfacApiResponse {
  results: Array<{
    name: string;
    matchCount: number;
    matches: Array<{
      score: number;
      matchSummary: {
        matchFields: Array<{
          similarity: string;
          fieldName: string;
          caseField: string;
          sanctionField: string;
          sanctionFieldNote?: string;
        }>;
      };
      sanction: {
        id: string;
        type: string;
        categories: string[];
        name: string;
        personDetails?: {
          birthDates?: string[];
          citizenships?: string[];
          nationalities?: string[];
        };
      };
    }>;
  }>;
}
