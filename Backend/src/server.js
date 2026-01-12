import express from "express";
import path from "path";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest,functions } from "./lib/inngest.js";  

const app=express();

const __dirname=path.resolve();

app.use(express.json());
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));
app.use("/api/inngest",serve({clirnt: inngest,functions}));

app.get("/aman",(req,res)=>{
    res.status(200).json({msg: "api is up and runing"});
 });

if(ENV.NODE_ENV==="production"){
   app.use(express.static(path.join(__dirname, "../frontend/dist")));

   app.use((req,res)=>{
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