import { Router, Request, Response, NextFunction } from "express";
import { screenCustomerOfac } from "../services/ofacService";

const router = Router();

router.get(
  "/screen",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { fullName, dateOfBirth, country } = req.query;

      if (!fullName || !dateOfBirth || !country) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      console.log(
        `Screening request for: ${fullName}, ${dateOfBirth}, ${country}`
      );

      const result = await screenCustomerOfac(
        fullName as string,
        dateOfBirth as string,
        country as string
      );

      console.log(`Screening result: ${JSON.stringify(result)}`);

      res.json(result);
    } catch (error) {
      console.error("Error in screening route:", error);
      next(error);
    }
  }
);

export const screeningRoutes = router;
