import express from "express";
import path from "path";
import cors from "cors";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";

const app=express();

const _dirnmae=path.resolve();

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

app.use("/api/inngest", serve({client:inngest,functions}));

 app.get("/aman",(req,res)=>{
    res.status(200).json({msg: "api is up and runing"});

 });

 if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(_dirnmae,"../Frontend/build")));
    app.get("/{*any}", (req, res) => {
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