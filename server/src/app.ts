import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();

const allowedOrigins = (process.env.FRONTEND_URLS || "").split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // ✅ Allow request
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

export default app;
