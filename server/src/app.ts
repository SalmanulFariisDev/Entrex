import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
// import authRoutes from './routes/auth.routes'

const app = express()

app.use(cors({
  origin: process.env.FRONTEND_URL, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json())

// app.use('/api/auth', authRoutes)

export default app
