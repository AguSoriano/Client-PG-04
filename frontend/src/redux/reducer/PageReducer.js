import { SET_PAGE } from "../actions/Page/ActionTypes";

// const initialState = JSON.parse(
//   window.localStorage.getItem("pageState") ||
//     JSON.stringify({
//       page: 0,
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("pageState", JSON.stringify(state));
// };

const initialState = {
  page: 0,
};

export default function pageReducer(state = initialState, { type, payload }) {
  // let newState;
  switch (type) {
    case SET_PAGE: {
      // newState = {
      //   ...state,
      //   page: payload,
      // };
      // break;
      return {
        ...state,
        page: payload,
      };
    }

    default:
      return state;
  }
  // saveState(newState);
  // return newState;
}
