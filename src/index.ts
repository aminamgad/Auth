import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db';
import authRoutes from './routes/auth.route';

dotenv.config();
const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Hello World");
});

export default app