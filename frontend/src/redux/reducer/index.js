import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import categoryReducer from "./CategoryReducer";
import favoriteReducer from "./FavoritesReducer";
import pageReducer from "./PageReducer";
import prodDetailReducer from "./ProdDetailReducer";
import productsReducer from "./ProductsReducer";
import weekProdReducer from "./WeekProdReducer";
import usersReducer from "./UsersReducer";

// const initialState = JSON.parse(
//   window.localStorage.getItem("reduxStore") ||
//     JSON.stringify({
//       cartproduct: [],
//     })
// );

// const saveState = (state) => {
//   window.localStorage.setItem("reduxStore", JSON.stringify(state));
// };

export const rootReducer = combineReducers(
  {
    cartReducer,
    categoryReducer,
    favoriteReducer,
    pageReducer,
    prodDetailReducer,
    productsReducer,
    weekProdReducer,
    usersReducer,
  }
  // saveState(newState);
  // return newState;
);
