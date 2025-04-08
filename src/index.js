import dotenv from 'dotenv';
import  connectDB  from './database/index.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000);
    console.log(`Server is running on PORT ${process.env.PORT}`);
})
.catch((err)=>{
    console.log("MongoDB connection faild !!!",err);
})















// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';

// import app from "express";
// const app= express();

// ;(async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error",(error)=>{
//         console.log("ERR",error);
//         throw error;
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.log(error);
//         throw err
//     }
// })()