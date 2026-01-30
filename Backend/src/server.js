import express from "express";
import path from "path";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middleware/protectRoute.js";


const app=express();

const _dirnmae=path.resolve();

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));


app.use(clerkMiddleware())

app.use("/api/inngest", serve({client:inngest,functions}));

 app.get("/aman",(req,res)=>{
    req.auth();
    res.status(200).json({msg: "api is up and runing"});

 });

 app.get("/video-calls", protectRoute, (req,res)=>{
    res.status(200).json({msg:"This is protectRoute", user:req.user});
 });

 if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(_dirnmae,"../Frontend/build")));
    app.use((req, res) => {
        res.sendFile(path.join(_dirnmae, "../Frontend","build","index.html")); // relative path_dirnmae, "../Frontend","dist","index.html"));
      });
 }

const startServer=async()=>{
    try{
        await connectDB();
        console.log("MongoDB connected ");
        app.listen(ENV.PORT,()=>console.log(`Server is running on port ${ENV.PORT}`));
    }
    catch(err){
        console.log("Error while connecting to db", err);
        process.exit(1);
    }
};

startServer();