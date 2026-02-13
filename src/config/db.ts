import mongoose from "mongoose";

export const connectDB = async (DB_KEY: string) => {
  try {
    await mongoose.connect(DB_KEY);
    console.log("Connected to DB");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log("Cannot connect to DB");
    process.exit(1);
  }
};
