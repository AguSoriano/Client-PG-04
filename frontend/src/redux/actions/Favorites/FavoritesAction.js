import { ADD_FAV, ADD_HISTORY, CLEAR_HIST, REMOVE_FAV } from "./ActionTypes";

export const addFav = (product) => {
  return {
    type: ADD_FAV,
    payload: product,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const addHistory = (prod) => {
  return {
    type: ADD_HISTORY,
    payload: prod,
  };
};

export const clearHist = () => {
  return {
    type: CLEAR_HIST,
    payload: [],
  };
};
