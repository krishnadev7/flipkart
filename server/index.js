import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DefaultData } from './default.js';
import Route from './routes/Route.js'
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
const PORT = 8000 || process.env.PORT


const Connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected to mongodb');
    } catch (error) {
        console.log('mongodb error',error.message);
    }
}

app.use('/',Route)

app.listen(PORT,()=>{
    Connect();
    console.log(`server connected on http://localhost:${PORT}`);
})

// DefaultData();

export let PaytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuidv4();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'krish@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'