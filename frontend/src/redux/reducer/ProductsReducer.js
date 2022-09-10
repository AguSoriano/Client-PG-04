import {
  FILTER_BY,
  FILTER_BY2,
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
} from "../actions/Products/ActionTypes";

const initialState = {
  product: [],
  productCopy: [],
  productCopy2: [],
};

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_NAME_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        product: payload,
        productCopy: payload,
      };

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
      return {
        ...state,
        product: sortedName,
      };

    case ORDER_PRICE:
      const sortedPrice =
        payload === "min_price"
          ? state.product.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          : state.product.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      return {
        ...state,
        product: sortedPrice,
      };

    case FILTER_BY: {
      return {
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
    }

    case FILTER_BY2: {
      return {
        ...state,
        product:
          payload === "all"
            ? state.productCopy2
            : state.productCopy2.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
      };
    }

    default:
      return state;
  }
}
