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
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        prodDetail: payload,
      };
    }

    default:
      return state;
  }

  // saveState(newState);
  // return newState;
}
