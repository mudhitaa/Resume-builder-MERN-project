import dotenv from "dotenv";
dotenv.config(); 

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Attempting DB connection...");
        console.log("URI exists:", !!process.env.MONGO_URI); 
        const conn = await mongoose.connect(
            process.env.MONGO_URI as string
        );
        console.log("MongoDB Connected:", conn.connection.host);
        console.log("DB Name:", conn.connection.name);
    } catch (error) {
        console.error("DB Connection Failed:", error); 
        process.exit(1);
    }
};

export default connectDB;