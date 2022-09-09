import { SET_PAGE } from "../actions/Page/ActionTypes";

const initialState = {
  page: 0,
};

export default function pageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PAGE: {
      return {
        ...state,
        page: payload,
      };
    }

    default:
      return state;
  }
}
