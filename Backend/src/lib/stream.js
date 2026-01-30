import {streamchat} from "stream-chat";
import { ENV } from "./env.js";
const apikey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;

if(!apikey || !apiSecret){
    console.error("Stream API key and secret are required");
}

export const  chatclint=streamchat.getInstance(apikey,apiSecret);   

export const upsetStreamUser=async(userDta)=>{
    try{
        await chatclint.upsertUser(userDta);
        console.log("Stream user upserted successfully");
    }
    catch(err){
        console.log("Error while upserting Stream user",err);
        process.exit(1);        

    }
};
export const deleteStreamUser=async(userId)=>{
    try{
        await chatclint.deleteUser(userId);
        console.log("Stream user deleted successfully: ", userId);
    }
    catch(err){
        console.log("Error while deleting Stream user",err);
        process.exit(1);    
    }
};
