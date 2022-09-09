import { WEEK_PROD } from "../actions/WeekProducts/ActionTypes";

const initialState = {
  weekProd: [],
};

export default function weekProdReducer(
  state = initialState,
  { type, payload }
) {
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
}
