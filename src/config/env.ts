import dotenv from "dotenv";
dotenv.config();
const DB_KEY = process.env.DB_KEY;
const JWT_SECRET = process.env.JWT_SECRET;
if (!DB_KEY || !JWT_SECRET) {
  throw new Error("Check .env");
}

export const env = {
  DB_KEY,
  JWT_SECRET,
};
