import { WEEK_PROD } from "../actions/WeekProducts/ActionTypes";

// const initialState = JSON.parse(
//   window.localStorage.getItem("weekProdState") ||
//     JSON.stringify({
//       weekProd: [],
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("weekProdState", JSON.stringify(state));
// };

const initialState = {
  weekProd: [],
};

export default function weekProdReducer(
  state = initialState,
  { type, payload }
) {
  // let newState;
  switch (type) {
    case WEEK_PROD: {
      return {
        ...state,
        weekProd: payload,
      };
    }

    default:
      return state;
  }
  //   saveState(newState);
  //   return newState;
}
