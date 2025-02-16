import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import { rateLimiter } from "./middleware/rateLimiter";
import { screeningRoutes } from "./routes/screeningRoutes";

import { PORT, FRONTEND_URL } from "./config/env";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: FRONTEND_URL || "https://bree-assessment.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(rateLimiter);

app.use("/api", screeningRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
