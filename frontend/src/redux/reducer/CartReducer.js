import {
  ADD_TO_CART,
  ORDER_PRODUCT,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../actions/Cart/ActionTypes";

const initialState = {
  cartproduct: [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ORDER_PRODUCT: {
      return {};
    }

    case ADD_TO_CART: {
      return {
        ...state,
        cartproduct: [...state.cartproduct, payload],
      };
    }
    case REMOVE_ONE_FROM_CART: {
      return {
        ...state,
        cartproduct: state.cartproduct.filter(
          (product) => product.id !== payload
        ),
      };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cartproduct: payload,
      };
    }

    default:
      return state;
  }
}
