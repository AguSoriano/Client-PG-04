import axios from "axios";
import {
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
  GET_PRODUCT_BY_CATEGORY,
  GET_CATEGORIES,
  CLEAN_DETAIL,
  FILTER_BY,
  SET_PAGE,
  WEEK_PROD,
  FILTER_BY2,
} from "./ActionTypes";
import { GET_DETAIL } from "./ActionTypes";
// import { products } from "../../DB/db";

export function getNameProduct(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `https://pf-api-04.up.railway.app/products?name=${name}`
      );
      return dispatch({
        type: GET_NAME_PRODUCT,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getProducts() {
  return async function (dispatch) {
    try {
      let json = await axios.get("https://pf-api-04.up.railway.app/products");

      return dispatch({
        type: GET_PRODUCTS,
        payload: json.data,
        // payload: products,
      });
    } catch (error) {
      return error;
    }
  };
}

export function getCategories() {
  return function (dispatch) {
    return axios
      .get("https://pf-api-04.up.railway.app/category")
      .then((response) => {
        dispatch({ type: GET_CATEGORIES, payload: response.data });
      });
  };
}

export function getProductByCategory(categoryName) {
  return function (dispatch) {
    return axios
      .get(`/products/category/${categoryName}`)
      .then((products) => {
        dispatch({ type: GET_PRODUCT_BY_CATEGORY, payload: products.data });
      })
      .catch((err) => console.log(err));
  };
}

export function OrderAlphabetical(payload) {
  try {
    return {
      type: ORDER_ALPHABETICAL,
      payload,
    };
  } catch (error) {
    return error;
  }
}

export function OrderPrice(payload) {
  return {
    type: ORDER_PRICE,
    payload,
  };
}

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.get(
        `https://pf-api-04.up.railway.app/products/${id}`
      );

      return dispatch({
        type: GET_DETAIL,
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
    payload: {},
  };
};

export const filterBy = (category) => {
  return {
    type: FILTER_BY,
    payload: category,
  };
};

export const setPageAct = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const weekProd = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `https://pf-api-04.up.railway.app/products`
      );

      products.data.sort((a, b) => a.id - b.id);

      return dispatch({
        type: WEEK_PROD,
        payload: products.data.slice(0, 3),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterBy2 = (category2) => {
  return {
    type: FILTER_BY2,
    payload: category2,
  };
};