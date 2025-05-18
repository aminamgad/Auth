// Authentication  => email , password , // Authorization => roles

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db';
import authRoutes from './routes/auth.route';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();


// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
