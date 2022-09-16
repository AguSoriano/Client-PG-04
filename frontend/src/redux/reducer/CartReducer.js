import {
  ADD_TO_CART,
  CLEAN_ORDER_DETAIL,
  FILTER_ORDER_BY,
  GET_ALL_ORDERS,
  GET_ORDER_DETAIL,
  ORDER_PRODUCT,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../actions/Cart/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("cartState") ||
    JSON.stringify({
      allOrders: [],
      allOrdersCopy: [],
      cartproduct: [],
      orderDetail: {},
    })
);

const saveState = (state) => {
  window.localStorage.setItem("cartState", JSON.stringify(state));
};

export default function cartReducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case ORDER_PRODUCT: {
      newState = {};
      break;
    }
    case ADD_TO_CART: {
      newState = {
        ...state,
        cartproduct: [...state.cartproduct, payload.prodDetail],
      };
      break;
    }
    case REMOVE_ONE_FROM_CART: {
      newState = {
        ...state,
        cartproduct: state.cartproduct.filter(
          (product) => product.id !== payload
        ),
      };
      break;
    }
    case REMOVE_ALL_FROM_CART: {
      newState = {
        ...state,
        cartproduct: payload,
      };
      break;
    }
    case GET_ALL_ORDERS: {
      newState = {
        ...state,
        allOrders: payload,
        allOrdersCopy: payload,
      };
      break;
    }
    case GET_ORDER_DETAIL: {
      newState = {
        ...state,
        orderDetail: payload,
      };
      break;
    }
    case CLEAN_ORDER_DETAIL: {
      newState = {
        ...state,
        orderDetail: payload,
      };
      break;
    }
    case FILTER_ORDER_BY: {
      newState = {
        ...state,
        allOrders:
          payload === "all"
            ? state.allOrdersCopy
            : state.allOrdersCopy.filter((ord) => ord.status === payload),
      };
      break;
    }
    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}
