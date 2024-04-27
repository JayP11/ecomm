import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    const trending_products = action.payload.filter(
      (product) => product.trending === true
    );
    return {
      ...state,
      products_loading: true,
      products: action.payload,
      featured_products,
      trending_products,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, produts_error: true };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
