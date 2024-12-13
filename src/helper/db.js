import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is not defined in the environment variables.");
        }

        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "WorkManager", // Specify the database name
        });

        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection FAILED!!!");
        console.error(`Reason: ${error.message}`);
    }
};