import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/product_reducer";
import { products_url as url } from "../utils/constants";
import { useUserContext } from "../context/user_context";

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions";

const initialState = {
  trending_products: [],
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { userid } = useUserContext();
  //using reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(initialState);
  const getUserId = () => {
    let userid = localStorage.getItem("userid");
    if (userid) {
      return JSON.parse(localStorage.getItem("userid"));
    } else {
      return 0;
    }
  };

  //fetch all product api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.mm.v1+json",
        },
      });
      const products = response.data.data;
      console.log("products", products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  // use effect to fire function when site loads
  useEffect(() => {
    fetchProducts(`${url}${userid}`);
    // fetchProducts(`${url}`);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
