import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import userRouter from './routes/user';  // ✅ import your router

dotenv.config();

const app = express();

// ✅ Allow multiple frontend URLs
const allowedOrigins = (process.env.FRONTEND_URLS || "").split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
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

// ✅ Mount routes
app.use("/api", userRouter); 

export default app;
