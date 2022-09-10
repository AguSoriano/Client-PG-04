import { CLEAN_DETAIL, CLEAN_EDIT, GET_DETAIL } from "../actions/ProdDetail/ActionTypes";

const initialState = {
  prodDetail: {},
  prodEditDetail: {},
};

export default function prodDetailReducer(
  state = initialState,
  { type, payload }
) {
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
}
