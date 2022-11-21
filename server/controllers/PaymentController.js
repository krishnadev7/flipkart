import formidable from 'formidable';
import { PaytmMerchantKey, paytmParams } from '../index.js';
import paytmchecksum from '../paytm/PaytmChecksum.js'
import https from 'https'
import { response } from 'express';

export const AddPaymentGateWay = async(req,res) => {
        try {
            let paytmcheckSum = await paytmchecksum.generateSignature(paytmParams,PaytmMerchantKey);
            let params ={
                ...paytmParams, 'CHECKSUMHASH': paytmcheckSum
            }
            res.status(200).json(params)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
}

export const paytmResponse = async(req,res) => {
    const form = new formidable.IncomingForm();
    let paytmcheckSum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerifySignature = paytmcheckSum.verifySignature(req.body, PaytmMerchantKey , paytmcheckSum);
    if(isVerifySignature){
        let paytmParams = {};
        paytmParams['MID'] = req.body.MID;
        paytmParams['ORDERID'] = req.body.ORDERID;

        paytmcheckSum.generateSignature(paytmParams, PaytmMerchantKey).then(function(checkSum) {
            paytmParams['CHECKSUMHASH'] = checkSum;

            let post_data = JSON.stringify(paytmParams);
            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/statue',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            }
            let res = "";
            let post_req = https.request(options,function(post_res ) {
                post_res.on('data', function(chunk) {
                    res += chunk;
                });
                post_res.on('end', function() {
                    let result = JSON.parse(res)
                    response.redirect('http://localhost:3000/')
                })
            })
            post_req.write(post_data);
            post_req.end();
        })
    }else{
        console.log('Checksum mismatched');
    }
}