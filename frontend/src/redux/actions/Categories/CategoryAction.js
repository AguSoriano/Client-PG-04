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
  return async (dispatch) => {
    const categoryEdited = {
      loginUser,
      name: data.name.toLowerCase(),
    };
    try {
      await axios.put(
        `https://pf-api-04.up.railway.app/category/${id}`,
        categoryEdited
      );
      dispatch(getCategories());
    } catch (error) {
      console.log(error);
    }
  };
};

export const disableCategory = (id, loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
      status: true,
    };
    try {
      await axios.put(`https://pf-api-04.up.railway.app/category/${id}`, user);
      dispatch(getCategories());
    } catch (error) {
      console.log(error);
    }
  };
};

export const enableCategory = (id, loginUser) => {
  return async (dispatch) => {
    const user = {
      loginUser,
      status: false,
    };
    try {
      await axios.put(`https://pf-api-04.up.railway.app/category/${id}`, user);
      dispatch(getCategories());
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
      await axios.put(
        `https://pf-api-04.up.railway.app/category/delete/${id}`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
};
