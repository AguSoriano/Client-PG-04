import axios from "axios";

import {
  ADD_TO_CART,
  GET_ALL_ORDERS,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "./ActionTypes";

export const addToCart = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `https://pf-api-04.up.railway.app/user/${data.loginUser.id}/cart`,
        data
      );
      return dispatch({
        type: ADD_TO_CART,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeOneProducts = (data) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://pf-api-04.up.railway.app/user/${data.loginUser.id}/cart/delete?id=${data.id}`
      );
      return dispatch({
        type: REMOVE_ONE_FROM_CART,
        payload: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeAllCart = (user) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://pf-api-04.up.railway.app/user/${user.id}/cart`
      );
      return dispatch({
        type: REMOVE_ALL_FROM_CART,
        payload: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllOrders = (userLoged) => {
  return async (dispatch) => {
    const user = {
      rol: userLoged.rol,
    };
    try {
      const { data } = await axios.put(
        "https://pf-api-04.up.railway.app/order",
        user
      );
      return dispatch({
        type: GET_ALL_ORDERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
