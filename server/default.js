import { products } from './constants/data.js';
import { Product } from './model/Product.js';

export const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log('data imported succesfully');
  } catch (error) {
    console.log('error while inserting data', error.message);
  }
};
