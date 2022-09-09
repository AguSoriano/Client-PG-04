import { CLEAN_DETAIL, GET_DETAIL } from "../actions/ProdDetail/ActionTypes";

const initialState = {
  prodDetail: {},
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
