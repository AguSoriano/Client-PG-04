import {
  CLEAR_SEARCH,
  FILTER_BY,
  FILTER_BY2,
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
} from "../actions/Products/ActionTypes";

// const initialState = JSON.parse(
//   window.localStorage.getItem("productsState") ||
//     JSON.stringify({
//       product: [],
//       productCopy: [],
//       productCopy2: [],
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("productsState", JSON.stringify(state));
// };

const initialState = {
  product: [],
  productCopy: [],
  productCopy2: [],
  search: [],
};

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  // let newState;
  switch (type) {
    case GET_NAME_PRODUCT: {
      return {
        ...state,
        search: payload,
      };
    }

    case CLEAR_SEARCH: {
      return {
        ...state,
        search: payload,
      };
    }

    case GET_PRODUCTS: {
      return {
        ...state,
        product: payload,
        productCopy: payload,
      };
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
      const sortedSearch =
        payload === "A-Z"
          ? state.search.sort((a, b) => {
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
        search: sortedSearch,
      };
    }

    case ORDER_PRICE: {
      const sortedPrice =
        payload === "min_price"
          ? state.product.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          : state.product.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      const sortedPriceSearch =
        payload === "min_price"
          ? state.search.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          : state.search.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      return {
        ...state,
        product: sortedPrice,
        search: sortedPriceSearch,
      };
    }

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
          // payload === "all"
          //   ? state.productCopy2
          //   : state.productCopy2.filter((prod) =>
          //       prod.categories.some((cat) => cat.name === payload)
          //     ),
          payload === "all"
            ? state.productCopy
            : state.productCopy.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
      };
    }

    default:
      return state;
  }
  // saveState(newState);
  // return newState;
}
