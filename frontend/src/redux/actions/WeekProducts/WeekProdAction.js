import axios from "axios";
import { WEEK_PROD } from "./ActionTypes";

export const weekProd = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `https://pf-api-04.up.railway.app/products`
      );

      products.data.sort((a, b) => a.id - b.id);

      return dispatch({
        type: WEEK_PROD,
        payload: products.data.slice(0, 5),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
