import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB=async()=>{
    try{
            const conn=await mongoose.connect(ENV.DB_URL);
            console.log("connection to db successful");
            }
            catch(err){
                console.log("error while connecting to db", err);
                process.exit(1);
            }
        };
    