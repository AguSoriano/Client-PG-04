import {
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
  GET_PRODUCT_BY_CATEGORY,
  GET_CATEGORIES,
  CLEAN_DETAIL,
  FILTER_BY,
  SET_PAGE,
  WEEK_PROD,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ORDER_PRODUCT,
  CLEAR_CART,
  FILTER_BY2,
} from "../actions/ActionTypes.js";
import { GET_DETAIL } from "../actions/ActionTypes";

const initialState = JSON.parse(
  window.localStorage.getItem("reduxStore") ||
    JSON.stringify({
      product: [],
      productCopy: [],
      productCopy2: [],
      prodDetail: {},
      categories: [],
      page: 0,
      weekProd: [],
      cartproduct: [],
    })
);

const saveState = (state) => {
  window.localStorage.setItem("reduxStore", JSON.stringify(state));
};

export default function reducer(state = initialState, { type, payload }) {
  //vamos a ejecutar los typos de accion para saber donde ejecutar cada logica
  let newState;
  switch (type) {
    case GET_NAME_PRODUCT:
      newState = {
        ...state,
        product: payload,
      };
      break;

    case GET_PRODUCTS:
      newState = {
        ...state,
        product: payload,
        productCopy: payload,
      };
      break;

    case GET_CATEGORIES:
      newState = {
        ...state,
        categories: payload,
      };
      break;

    case GET_PRODUCT_BY_CATEGORY:
      newState = {
        ...state,
        categories: payload,
      };
      break;

    case ORDER_ALPHABETICAL:
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

    case ORDER_PRICE:
      const sortedPrice =
        payload === "min_price"
          ? state.product.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          : state.product.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      newState = {
        ...state,
        product: sortedPrice,
      };
      break;
    case GET_DETAIL: {
      newState = {
        ...state,
        prodDetail: payload,
      };
      break;
    }
    case CLEAN_DETAIL: {
      newState = {
        ...state,
        prodDetail: payload,
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
    case SET_PAGE: {
      newState = {
        ...state,
        page: payload,
      };
      break;
    }
    case WEEK_PROD: {
      newState = {
        ...state,
        weekProd: payload,
      };
      break;
    }
    case ADD_TO_CART: {
      newState = {};
      break;
    }
    case ORDER_PRODUCT: {
      newState = {};
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
        cartproducts: [],
      };
      break;
    }
    case CLEAR_CART: {
      newState = {};
      break;
    }
    default:
      newState = state;
  }

  saveState(newState);

  return newState;
}
