import mongoose from "mongoose";
import { DB_URL } from "../config";
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('database is not connected ', error);
    }
}

export default connectDB;