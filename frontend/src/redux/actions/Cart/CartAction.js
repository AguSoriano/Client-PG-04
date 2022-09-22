import axios from "axios";

import {
  ADD_TO_CART,
  CLEAN_ORDER_DETAIL,
  FILTER_ORDER_BY,
  GET_ALL_ORDERS,
  GET_ORDER_DETAIL,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  CLEAR_CART,
  SET_LOGIN,
} from "./ActionTypes";

export const addToCart = (data) => {
  return async (dispatch) => {
    try {
      if (data.loginUser.id) {
        await axios.post(
          `https://pf-api-04.up.railway.app/user/${data.loginUser.id}/cart`,
          data
        );
      }
      return dispatch({
        type: ADD_TO_CART,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// export const cartLogin = ()=>{
//   const items = JSON.parse(window.localStorage.getItem("cartState"))
//   try{
//     return async(dispatch) =>{
//       items.cartproduct.map((e=>{
//       dispatch(addToCart(e))
//     }))
//   }
// }catch(error){
//   console.log(error)
// }}

export const removeOneProducts = (data) => {
  console.log("dataaa", data);
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

export const clearOnlyCart = () => {
  return {
    type: CLEAR_CART,
    payload: [],
  };
};

export const getAllOrders = (loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
    };
    try {
      const orders = await axios.put(
        "https://pf-api-04.up.railway.app/order",
        user
      );

      const orders2 = await Promise.all(
        orders.data.map(async (or) => {
          let allItems = await axios.get(
            `https://pf-api-04.up.railway.app/user/${or.userId}/order?id=${or.id}`
          );
          return {
            id: or.id,
            status: or.status,
            userId: or.userId,
            createdAt: or.createdAt,
            updatedAt: or.updatedAt,
            products: allItems.data,
          };
        })
      );

      const orders3 = await Promise.all(
        orders2.map(async (or) => {
          let user = await axios.get(
            `https://pf-api-04.up.railway.app/user/${or.userId}`
          );
          return {
            id: or.id,
            status: or.status,
            createdAt: or.createdAt,
            updatedAt: or.updatedAt,
            products: or.products,
            email: user.data.email,
          };
        })
      );

      return dispatch({
        type: GET_ALL_ORDERS,
        payload: orders3,
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
      const order = await axios.put(
        `https://pf-api-04.up.railway.app/order/${id}`,
        user
      );

      const user2 = await axios.get(
        `https://pf-api-04.up.railway.app/user/${order.data.userId}`
      );

      const products = await axios.get(
        `https://pf-api-04.up.railway.app/user/${order.data.userId}/order?id=${id}`
      );

      const allProductsDetail = await Promise.all(
        products.data.map(async (prod) => {
          let prodDetail = await axios.get(
            `https://pf-api-04.up.railway.app/products/${prod.productId}`
          );
          return {
            id: prod.productId,
            quantity: prod.quantity,
            name: prodDetail.data.name,
            longDescription: prodDetail.data.longDescription,
            shortDescription: prodDetail.data.shortDescription,
            image: prodDetail.data.image ? prodDetail.data.image : "",
            price: prodDetail.data.price,
            stock: prodDetail.data.stock,
            status: prodDetail.data.status,
          };
        })
      );

      const data = {
        order: order.data,
        user: user2.data,
        allProductsDetail: allProductsDetail,
      };

      // console.log(order.data, user2.data, products.data, allProductsDetail);

      return dispatch({
        type: GET_ORDER_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrderDetailUser = (id, loginUser) => {
  return async (dispatch) => {
    try {
      const order = await axios.get(
        `https://pf-api-04.up.railway.app/user/${loginUser.id}/orders`
      );

      const products = await axios.get(
        `https://pf-api-04.up.railway.app/user/${loginUser.id}/order?id=${id}`
      );

      const allProductsDetail = await Promise.all(
        products.data.map(async (prod) => {
          let prodDetail = await axios.get(
            `https://pf-api-04.up.railway.app/products/${prod.productId}`
          );
          return {
            id: prod.productId,
            quantity: prod.quantity,
            name: prodDetail.data.name,
            longDescription: prodDetail.data.longDescription,
            shortDescription: prodDetail.data.shortDescription,
            image: prodDetail.data.image ? prodDetail.data.image : "",
            price: prodDetail.data.price,
            stock: prodDetail.data.stock,
            status: prodDetail.data.status,
          };
        })
      );

      const data = {
        order: order.data.find((o) => o.id == id),
        allProductsDetail: allProductsDetail,
      };

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
  return async (dispatch) => {
    const data = {
      loginUser,
      status: status.toLowerCase(),
    };
    // console.log(data)
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/order/editstatus/${id}`,
        data
      );
      alert(`La orden se modifico a ${status}`);
      dispatch(getAllOrders(loginUser));
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

export const setLogin = (data) => {
  return {
    type: SET_LOGIN,
    payload: data,
  };
};
