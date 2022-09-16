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

export const createProduct = (loginUser, data) => {
  return async () => {
    const newProduct = {
      loginUser,
      name: data.name.toLowerCase(),
      image: data.image,
      shortDescription: data.shortDescription.toLowerCase(),
      longDescription: data.longDescription.toLowerCase(),
      stock: Number(data.stock),
      price: Number(data.price),
      category: data.category.map((cat) => cat.name),
    };
    // console.log(newProduct);
    try {
      await axios.post("https://pf-api-04.up.railway.app/products", newProduct);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (id, loginUser) => {
  return async () => {
    const user = {
      loginUser,
    };
    try {
      await axios.delete(
        `https://pf-api-04.up.railway.app/products/${id}`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
};
