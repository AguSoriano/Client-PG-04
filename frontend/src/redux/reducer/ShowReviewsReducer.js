import { GET_REVIEWS_BY_PRODUCT, GET_ALL_REVIEWS } from "../actions/Reviews/ActionTypes";

  const initialState = {
    reviewsByProd: [], 
    allReviews:[]     
  }



  export default function showReviewsReducer(
    state = initialState,
    { type, payload }
  ) {

    let newState;
    switch (type) {
      
      case GET_REVIEWS_BY_PRODUCT: {
        newState = {
          ...state,
          reviewsByProd: payload,
        };
        break;
      }
      case GET_ALL_REVIEWS: {
        newState = {
          ...state,
          allReviews: payload,
        }
      }
  
      default:
        newState = state;
    }
    // saveState(newState);
    return newState;
  }
  