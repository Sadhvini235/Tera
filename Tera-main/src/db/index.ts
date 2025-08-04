import { DATABASE_URL } from "../config";
import mongoose from "mongoose";
// mongodb+srv://viviroberts07:MAsplwEFizRHTMpf@fashion-guide.9o97faf.mongodb.net/
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://viviroberts07:MAsplwEFizRHTMpf@fashion-guide.9o97faf.mongodb.net/?retryWrites=true&w=majority&appName=Fashion-Guide");
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};



