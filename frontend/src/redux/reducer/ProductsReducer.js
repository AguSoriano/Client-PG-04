import {
  FILTER_BY,
  FILTER_BY2,
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
} from "../actions/Products/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("productsState") ||
    JSON.stringify({
      product: [],
      productCopy: [],
      productCopy2: [],
    })
);

const saveState = (state) => {
  window.localStorage.setItem("productsState", JSON.stringify(state));
};

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  let newState;
  switch (type) {
    case GET_NAME_PRODUCT: {
      newState = {
        ...state,
        product: payload,
      };
      break;
    }

    case GET_PRODUCTS: {
      newState = {
        ...state,
        product: payload,
        productCopy: payload,
      };
      break;
    }

    case ORDER_ALPHABETICAL: {
      const sortedName =
        payload === "A-Z"
          ? state.product.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.product.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      newState = {
        ...state,
        product: sortedName,
      };
      break;
    }

    case ORDER_PRICE: {
      const sortedPrice =
        payload === "min_price"
          ? state.product.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          : state.product.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      newState = {
        ...state,
        product: sortedPrice,
      };
      break;
    }

    case FILTER_BY: {
      newState = {
        ...state,
        product:
          payload === "all"
            ? state.productCopy
            : state.productCopy.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
        productCopy2:
          payload === "all"
            ? state.productCopy
            : state.productCopy.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
      };
      break;
    }

    case FILTER_BY2: {
      newState = {
        ...state,
        product:
          payload === "all"
            ? state.productCopy2
            : state.productCopy2.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
      };
      break;
    }

    default:
      newState = state;
  }
  saveState(newState);
  return newState;
}
