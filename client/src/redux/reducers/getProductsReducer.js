import * as actionType from '../constants/productConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.Get_Product_Success:
      return { products: action.payload };

    case actionType.Get_Product_Fail:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = {product: {}}, action) => {
  switch(action.type){
    case actionType.Get_ProductDetails_Request:
      return {loading: true}
    case actionType.Get_ProductDetails_Success:
      return {loading: false, product: action.payload};
    case actionType.Get_ProductDetails_Fail:
      return {loading: false, error: action.payload};
    case actionType.Get_ProductDetails_Reset:
      return {products:{}};
    default :
      return state;
  }
}