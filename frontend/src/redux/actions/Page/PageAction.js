import { SET_PAGE } from "./ActionTypes";

export const setPageAct = (page) => {
    return {
      type: SET_PAGE,
      payload: page,
    };
  };