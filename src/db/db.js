// import dotenv from "dotenv"
// dotenv.config({
//     path: './.env'
// })
import mongoose from "mongoose";

const URI = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error.message);
        process.exit(0);
    }
};

export default connectDB;
