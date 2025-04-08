
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async ()=>{
    try {
       const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n Mongodb connected ${connectionInstant}`);
    } catch (error) {
        console.log("MongoDB err:",error);
    }
}
export default connectDB;