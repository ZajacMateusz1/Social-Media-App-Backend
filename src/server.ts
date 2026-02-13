import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
const port = 5000;

dotenv.config();
const DB_KEY = process.env.DB_KEY;
if (!DB_KEY) {
  throw new Error("Add DB_KEY in .env");
}

const start = async () => {
  await connectDB(DB_KEY);
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
};

start();
