import axios from "axios";

import {
  CATEGORY_DETAIL,
  CLEAN_CAT_DETAIL,
  GET_CATEGORIES,
} from "./ActionTypes";

export const getCategories = () => {
  return function (dispatch) {
    return axios
      .get("https://pf-api-04.up.railway.app/category")
      .then((response) => {
        dispatch({ type: GET_CATEGORIES, payload: response.data });
      });
  };
};

export const getCategoryDetail = (id) => {
  return async (dispatch) => {
    try {
      const category = await axios.get(
        `https://pf-api-04.up.railway.app/category/${id}`
      );
      return dispatch({
        type: CATEGORY_DETAIL,
        payload: category.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanCatDetail = () => {
  return {
    type: CLEAN_CAT_DETAIL,
    payload: {},
  };
};

export const createCategory = (data, loginUser) => {
  return async () => {
    const newCategory = {
      loginUser,
      name: data.name.toLowerCase(),
    };
    try {
      await axios.post(
        "https://pf-api-04.up.railway.app/category",
        newCategory
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const editCategory = (id, loginUser, data) => {
  return async () => {
    const categoryEdited = {
      loginUser,
      name: data.name.toLowerCase(),
    };
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/category/${id}`,
        categoryEdited
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCategory = (id, loginUser) => {
  return async () => {
    const user = {
      loginUser,
    };
    try {
      await axios.delete(
        `https://pf-api-04.up.railway.app/category/${id}`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
};

//   export function getProductByCategory(categoryName) {
//     return function (dispatch) {
//       return axios
//         .get(`/products/category/${categoryName}`)
//         .then((products) => {
//           dispatch({ type: GET_PRODUCT_BY_CATEGORY, payload: products.data });
//         })
//         .catch((err) => console.log(err));
//     };
//   }
