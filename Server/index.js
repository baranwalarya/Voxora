 import express from "express"
 import dotenv from "dotenv"
 import connectDb from "./config/db.js"
 dotenv.config()

 const app=express()

 const PORT=process.env.PORT

 app.get("/",(req,res)=>{
    res.json("Hello from Server")
 })

 app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
    connectDb()
 })

