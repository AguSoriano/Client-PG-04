import axios from "axios";
import {
  FILTER_BY,
  FILTER_BY2,
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
} from "./ActionTypes";

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

export const filterBy = (category) => {
  return {
    type: FILTER_BY,
    payload: category,
  };
};

export const filterBy2 = (category2) => {
  return {
    type: FILTER_BY2,
    payload: category2,
  };
};

export const createProduct = (data) => {
  return async () => {
    try {
      const product = await axios.post(
        "https://pf-api-04.up.railway.app/products",
        data
      );
      alert(`El producto ${data.name} se creo`);
    } catch (error) {
      console.log(error);
    }
  };
};
