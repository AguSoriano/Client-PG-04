import {
  CATEGORY_DETAIL,
  CLEAN_CAT_DETAIL,
  GET_CATEGORIES,
} from "../actions/Categories/ActionTypes";

// const initialState = JSON.parse(
//   window.localStorage.getItem("categoryState") ||
//     JSON.stringify({
//       categories: [],
//       categoryDetail: {},
//       categoryEdit: {},
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("categoryState", JSON.stringify(state));
// };

const initialState = {
  categories: [],
  categoryDetail: {},
  categoryEdit: {},
};

export default function categoryReducer(
  state = initialState,
  { type, payload }
) {
  // let newState;
  switch (type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: payload,
      };
    }
    case CATEGORY_DETAIL: {
      return {
        ...state,
        categoryDetail: payload,
        categoryEdit: payload,
      };
    }
    case CLEAN_CAT_DETAIL: {
      return {
        ...state,
        categoryDetail: payload,
      };
    }
    default:
      return state;
  }
  // saveState(newState);
  // return newState;
}
