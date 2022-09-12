import axios from "axios";
import { CLEAN_DETAIL, GET_DETAIL } from "./ActionTypes";

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

export const editDetail = (id, data) => {
  return async () => {
    const prodEdited = {
      name: data.name.toLowerCase(),
      image: data.image,
      shortDescription: data.shortDescription.toLowerCase(),
      longDescription: data.longDescription.toLowerCase(),
      stock: Number(data.stock),
      price: Number(data.price),
      category: data.category.map((cat) => cat.name),
    };
    // console.log(prodEdited);
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/products/${id}`,
        prodEdited
      );
    } catch (error) {
      console.log(error);
    }
  };
};