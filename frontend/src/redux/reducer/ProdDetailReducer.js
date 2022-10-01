import { CLEAR_HIST } from "../actions/Favorites/ActionTypes";
import { CLEAN_DETAIL, GET_DETAIL } from "../actions/ProdDetail/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("prodDetailState") ||
    JSON.stringify({
      prodDetail: {},
      prodEditDetail: {},
      history: [],
    })
);

const saveState = (state) => {
  window.localStorage.setItem("prodDetailState", JSON.stringify(state));
};

// const initialState = {
//   prodDetail: {},
//   prodEditDetail: {},
//   history: [],
// };

export default function prodDetailReducer(
  state = initialState,
  { type, payload }
) {
  let newState;
  switch (type) {
    case GET_DETAIL: {
      newState = {
        ...state,
        prodDetail: payload,
        prodEditDetail: payload,
        history:
          state.history.length === 0
            ? [...state.history, payload]
            : state.history.some((p) => p.id === payload.id)
            ? state.history
            : [...state.history, payload],
      };
      break;
    }
    case CLEAN_DETAIL: {
      newState = {
        ...state,
        prodDetail: payload,
      };
      break;
    }
    case CLEAR_HIST: {
      newState = {
        ...state,
        history: payload,
      };
      break;
    }

    default:
      newState = state;
  }

  saveState(newState);
  return newState;
}
