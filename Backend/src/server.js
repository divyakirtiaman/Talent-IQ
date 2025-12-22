import express from "express";
import { ENV } from "./lib/env.js";

const app=express();
console.log(ENV.PORT);
console.log(ENV.DB_URL);
 app.get("/aman",(req,res)=>{
    res.status(200).json({msg: "api is up and runing"});

 });
 app.listen(3000, ()=> 
    console.log("Server is runing on port ENV.PORT"));