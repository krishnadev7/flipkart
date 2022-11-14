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
