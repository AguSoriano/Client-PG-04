import {
  ADD_TO_CART,
  ORDER_PRODUCT,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  CLEAR_CART,
} from "../actions/Cart/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("cartState") ||
    JSON.stringify({
      cartproduct: [],
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
        cartproduct: [...state.cartproduct, payload.prodTotal],
      };
      break;
    }
    case REMOVE_ONE_FROM_CART: {
      newState = {
        ...state,
        cartproduct: state.cartproduct.filter(
          (product) => product.prodDetail.id !== payload
        ),
      };
      break;
    }
    case CLEAR_CART:{
      newState ={
        ...state,
        cartproduct: payload,
      }
      break;
    }
    case REMOVE_ALL_FROM_CART: {
      newState = {
        ...state,
        cartproduct: payload,
      };
      break;
    }
    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}
