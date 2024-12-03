// import mongoose from "mongoose";

// export const connectDb = async() => {
//     try{
//         const {connection} = await mongoose.connect(process.env.MONGODB_URL, {
//             dbName: "Tutorial"
//         })

//         console.log("DB Connected Successfully");
//         console.log(connection);
//     }
//     catch(error){
//         console.log("DB Connection FAILED !!!!");
//         console.log(error);
//     }
// };



// ******* More correct way to write the code to connect the backend APIs with your Database *******
// import mongoose from "mongoose";

// export const connectDb = async () => {
//     try {
//         if (!process.env.MONGODB_URL) {
//             throw new Error("MONGODB_URL is not defined in the environment variables.");
//         }

//         const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
//             dbName: "Work Manager", // Specify the database name
//             // useNewUrlParser: true, // Ensures parsing compatibility
//             // useUnifiedTopology: true, // Use the new connection management engine
//         });

        // const uuser = new User({
        //     name : "test Name",
        //     email : "test@gmail.com",
        //     password : "test",
        //     about : "testing about"
        // })

        // await uuser.save();

        // console.log("User is created");

//         // console.log(`DB Connected Successfully to ${connection.host}/${connection.db.databaseName}`);
//         console.log("DB Connected Successfully");
//         // console.log(connection);
//     } catch (error) {
//         console.error("DB Connection FAILED!!!");
//         console.error(`Reason: ${error.message}`);
//         process.exit(1); // Optionally, exit the process on a failed connection in critical environments
//     }
// };




// ****** Clear Code *******
// import { User } from "@/models/user";
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