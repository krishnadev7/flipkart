import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DefaultData } from './default.js';

dotenv.config();
const app = express();
const PORT = 8000 || process.env.PORT


const Connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected to mongodb');
    } catch (error) {
        console.log('mongodb error',error.message);
    }
}

app.listen(PORT,()=>{
    Connect();
    console.log(`server connected on http://localhost:${PORT}`);
})

DefaultData();