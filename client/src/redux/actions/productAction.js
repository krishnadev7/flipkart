import axios from 'axios';
import * as actionTypes from '../constants/productConstants';

const URL = 'http://localhost:8000';

// 2nd function is the middleware function
export const getProducts = () => async dispatch => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionTypes.Get_Product_Success, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.Get_Product_Fail, payload: error.message });
  }
};

export const getProductDetails = id => async dispatch => {
  try {
      dispatch({ type: actionTypes.Get_ProductDetails_Request });
      const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionTypes.Get_ProductDetails_Success, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.Get_ProductDetails_Fail,
      payload: error.message,
    });
  }
};
