import { CLEAR_HIST } from "../actions/Favorites/ActionTypes";
import { CLEAN_DETAIL, GET_DETAIL } from "../actions/ProdDetail/ActionTypes";

// const initialState = JSON.parse(
//   window.localStorage.getItem("prodDetailState") ||
//     JSON.stringify({
//       prodDetail: {},
//       prodEditDetail: {},
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("prodDetailState", JSON.stringify(state));
// };

const initialState = {
  prodDetail: {},
  prodEditDetail: {},
  history: [],
};

export default function prodDetailReducer(
  state = initialState,
  { type, payload }
) {
  // let newState;
  switch (type) {
    case GET_DETAIL: {
      return {
        ...state,
        prodDetail: payload,
        prodEditDetail: payload,
        history: [...state.history, payload]
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        prodDetail: payload,
      };
    }
    case CLEAR_HIST: {
      return {
        ...state,
        history: payload,
      };
    }

    default:
      return state;
  }

  // saveState(newState);
  // return newState;
}
