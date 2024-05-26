// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";

import connectdb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})
connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db  conection error",err)
})








/*
import express from "express"
const app = express()
;(async () =>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App listen on port${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error:",error)
        throw err
    }
})()*/ 