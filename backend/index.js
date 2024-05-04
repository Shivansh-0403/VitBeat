import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// app.use(express.json({limit: "16kb"}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

dotenv.config({
    path: './.env'
})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI)
        // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log("MONGODB Connected..");
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

import userRouter from './routes/user.route.js'
import podcastRouter from './routes/podcast.route.js'
app.use("/api/user", userRouter)
app.use("/api/podcast", podcastRouter)