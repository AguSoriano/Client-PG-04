import { GET_CATEGORIES } from "../actions/Categories/ActionTypes";

const initialState = {
  categories: [],
};

export default function categoryReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
}
