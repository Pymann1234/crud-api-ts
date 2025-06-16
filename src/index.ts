import express from "express";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv"

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", userRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
