import express from 'express';
import { AddPaymentGateWay, paytmResponse } from '../controllers/PaymentController.js';
import { getProductById, getProducts } from '../controllers/ProductController.js';
import { Login, Signup } from '../controllers/UserController.js';

const router = express.Router();

router.post('/signup',Signup);
router.post('/login',Login);

router.get('/products',getProducts)
router.get('/product/:id',getProductById)

router.post('/payment',AddPaymentGateWay)
router.post('/callback',paytmResponse)
export default router;