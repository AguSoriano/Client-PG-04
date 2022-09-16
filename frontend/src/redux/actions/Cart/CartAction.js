import axios from "axios";

import {
  ADD_TO_CART,
  CLEAN_ORDER_DETAIL,
  FILTER_ORDER_BY,
  GET_ALL_ORDERS,
  GET_ORDER_DETAIL,
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

export const removeAllCart = (loginUser) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://pf-api-04.up.railway.app/user/${loginUser.id}/cart`
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

export const getAllOrders = (loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
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

export const getOrderDetail = (id, loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
    };
    try {
      const { data } = await axios.put(
        `https://pf-api-04.up.railway.app/order/${id}`,
        user
      );
      return dispatch({
        type: GET_ORDER_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanOrderDetail = () => {
  return {
    type: CLEAN_ORDER_DETAIL,
    payload: {},
  };
};

export const editStatusOrder = (id, loginUser, status) => {
  return async () => {
    const data = {
      loginUser,
      status,
    };
    // console.log(data)
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/order/editstatus/${id}`,
        data
      );
      alert(`La orden se modifico a ${status}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterOrderBy = (status) => {
  return {
    type: FILTER_ORDER_BY,
    payload: status,
  };
};
