import express from 'express';
import { getProducts } from '../controllers/ProductController.js';
import { Login, Signup } from '../controllers/UserController.js';

const router = express.Router();

router.post('/signup',Signup);
router.post('/login',Login);
router.get('/products',getProducts)

export default router;