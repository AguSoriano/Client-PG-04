import {
  CLEAN_ORDER_DETAIL,
  FILTER_ORDER_BY,
  GET_ALL_ORDERS,
  GET_ORDER_DETAIL,
} from "../actions/Cart/ActionTypes";

const initialState = {
  allOrders: [],
  allOrdersCopy: [],
  orderDetail: {},
};

export default function ordersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_ORDERS: {
      return {
        ...state,
        allOrders: payload,
        allOrdersCopy: payload,
      };
    }
    case GET_ORDER_DETAIL: {
      return {
        ...state,
        orderDetail: payload,
      };
    }
    case CLEAN_ORDER_DETAIL: {
      return {
        ...state,
        orderDetail: payload,
      };
    }
    case FILTER_ORDER_BY: {
      return {
        ...state,
        allOrders:
          payload === "all"
            ? state.allOrdersCopy
            : state.allOrdersCopy.filter((ord) => ord.status === payload),
      };
    }
    default:
      return state;
  }
}
