import { WEEK_PROD } from "../actions/WeekProducts/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("weekProdState") ||
    JSON.stringify({
      weekProd: [],
    })
);

const saveState = (state) => {
  window.localStorage.setItem("weekProdState", JSON.stringify(state));
};

export default function weekProdReducer(
  state = initialState,
  { type, payload }
) {
  let newState;
  switch (type) {
    case WEEK_PROD: {
      newState = {
        ...state,
        weekProd: payload,
      };
      break;
    }

    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}
