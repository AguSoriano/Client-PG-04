import axios from "axios";
import {
  CLEAR_SEARCH,
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
      let { data } = await axios.get(
        "https://pf-api-04.up.railway.app/products"
      );
      const productActives = data.filter((p) => !p.status);
      return dispatch({
        type: GET_PRODUCTS,
        payload: productActives,
      });
    } catch (error) {
      console.log(error);
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

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
    payload: [],
  };
};

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
  return async (dispatch) => {
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
      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (id, loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
      status: true,
    };
    try {
      await axios.put(`https://pf-api-04.up.railway.app/products/${id}`, user);
      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  };
};

export const eneableProduct = (id, loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
      status: false,
    };
    try {
      await axios.put(`https://pf-api-04.up.railway.app/products/${id}`, user);
      dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  };
};
