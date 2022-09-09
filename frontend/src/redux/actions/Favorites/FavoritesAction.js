import { ADD_FAV, REMOVE_FAV } from "./ActionTypes";

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
