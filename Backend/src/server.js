import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app=express();

const __dirname=path.resolve();


 app.get("/aman",(req,res)=>{
    res.status(200).json({msg: "api is up and runing"});
 });

if(ENV.NODE_ENV==="production"){
   app.use(express.static(path.join(__dirname, "../frontend/dist")));

   app.get("{*any}", (req,res)=>{
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
   });
}
const startSever=async()=>{
   try{
   await connectDB();
   app.listen(ENV.PORT, ()=> 
   console.log("Server is runing on port", ENV.PORT));
   }
   catch(err){
      console.log("error while starting server", err);
      process.exit(1);
   }
};
startSever();