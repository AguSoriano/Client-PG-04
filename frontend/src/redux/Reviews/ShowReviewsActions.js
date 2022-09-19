import axios from "axios";
import { GET_REVIEWS_BY_PRODUCT, GET_ALL_REVIEWS } from "./ActionTypes";

export function getReviewsProd(product) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/review/${product}`);
      console.log(json.data)
      return dispatch({
        type: GET_REVIEWS_BY_PRODUCT,
        payload: json.data,
      });
    } catch (error) {
      return error;
    }
  };
}


export function getAllReviews() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001:review`);
      return dispatch({
        type: GET_ALL_REVIEWS,
        payload: json.data,
      })
    } catch (error) {
      return error;
    }
  }
}

export const createShowReviews = (data) => {
  console.log(data)
  return async () => {
    const newReview = {
      description: data.description,
      ranking: data.ranking,
      productId: data.productId,
      userId: data.userId,
    };
    // console.log(newProduct);
    try {
      await axios.post("http://localhost:3001/review", newReview);
    } catch (error) {
      console.log(error);
    }
  };
};
