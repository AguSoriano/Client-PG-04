import {
  CATEGORY_DETAIL,
  CLEAN_CAT_DETAIL,
  GET_CATEGORIES,
} from "../actions/Categories/ActionTypes";

const initialState = {
  categories: [],
  categoryDetail: {},
  categoryEdit: {},
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
    case CATEGORY_DETAIL:
      return {
        ...state,
        categoryDetail: payload,
        categoryEdit: payload,
      };
    case CLEAN_CAT_DETAIL:
      return {
        ...state,
        categoryDetail: payload,
      };
    default:
      return state;
  }
}
