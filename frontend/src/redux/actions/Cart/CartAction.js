// import axios from "axios";

import {
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "./ActionTypes";

// export const addToCart = (product, id)=>{
//   return async (dispatch)=>{
//     try{
//       await axios.post(`http://localhost:3001/user/${id}/cart`, product
//       );
//       return dispatch({
//         type:ADD_TO_CART,
//         payload:product
//       })
//     }catch(err){
//       console.log(err)
//     }
//   }
//   }

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// export const removeOneProducts = (id, userId) => {
//     return async (dispatch) => {
//       try {
//       const { data } = await axios.delete(`http://localhost:3001/user/${userId}/cart/delete?id=${id}``);
//        return dispatch({
//        type: REMOVE_ONE_FROM_CART,
//        payload: id,
//      });
//    }catch (error) {
//      console.log(error);
//    }
//        }
//      }

export const removeOneProducts = (id) => {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
};

// export const removeAllCart = (id) => {
//        return async (dispatch) => {
//        try {
//        const { data } = await axios.delete(`http://localhost:3001/user/${id}/cart`);
//        return dispatch({
//         type: REMOVE_ALL_FROM_CART,
//         payload: [],
//       });
//        } catch (error) {
//         console.log(error);
//        }
//       };
//     };
export const removeAllCart = () => {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: [],
  };
};
