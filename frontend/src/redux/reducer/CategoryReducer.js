import {
  CATEGORY_DETAIL,
  CLEAN_CAT_DETAIL,
  GET_CATEGORIES,
} from "../actions/Categories/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("categoryState") ||
    JSON.stringify({
      categories: [],
      categoryDetail: {},
      categoryEdit: {},
    })
);

const saveState = (state) => {
  window.localStorage.setItem("categoryState", JSON.stringify(state));
};

export default function categoryReducer(
  state = initialState,
  { type, payload }
) {
  let newState;
  switch (type) {
    case GET_CATEGORIES: {
      newState = {
        ...state,
        categories: payload,
      };
      break;
    }
    case CATEGORY_DETAIL: {
      newState = {
        ...state,
        categoryDetail: payload,
        categoryEdit: payload,
      };
      break;
    }
    case CLEAN_CAT_DETAIL: {
      newState = {
        ...state,
        categoryDetail: payload,
      };
      break;
    }
    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}
