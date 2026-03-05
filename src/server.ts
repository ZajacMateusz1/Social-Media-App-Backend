import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";
const port = 5000;

const start = async () => {
  await connectDB(env.DB_KEY);
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
};

start();
