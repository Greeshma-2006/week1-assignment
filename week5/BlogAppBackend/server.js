import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// import routers ONLY (no models, no services)
import userRoute from './API/userApi.js';
import authorRoute from './API/authorApi.js';
import commonRouter from './API/commonApi.js';
import { adminRouter } from './API/adminApi.js';

dotenv.config();

const app = express();

//GLOBAL MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use('/user-api', userRoute);
app.use('/author-api', authorRoute);
app.use('/common-api', commonRouter);
app.use('/admin-api', adminRouter);

// DATABASE and SERVER START
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("DB connected");
        app.listen(6000, () =>
            console.log("Server running on port 6000")
        );
    })
    .catch(err => {
        console.error("DB connection failed:", err);
    });

// INVALID PATH HANDLER 
app.use((req, res) => {   
    res.status(404).json({
        message: `${req.url} is invalid path`
    });
});   

//   GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});