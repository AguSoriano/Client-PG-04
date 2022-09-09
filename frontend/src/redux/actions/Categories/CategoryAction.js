import axios from "axios";

import { GET_CATEGORIES } from "./ActionTypes";

export function getCategories() {
  return function (dispatch) {
    return axios
      .get("https://pf-api-04.up.railway.app/category")
      .then((response) => {
        dispatch({ type: GET_CATEGORIES, payload: response.data });
      });
  };
}

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
