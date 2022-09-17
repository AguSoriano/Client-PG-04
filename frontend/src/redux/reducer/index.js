import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import categoryReducer from "./CategoryReducer";
import favoriteReducer from "./FavoritesReducer";
import pageReducer from "./PageReducer";
import prodDetailReducer from "./ProdDetailReducer";
import productsReducer from "./ProductsReducer";
import weekProdReducer from "./WeekProdReducer";
import usersReducer from "./UsersReducer";
import ordersReducer from "./OrdersReducer";
import userLoginReducer from "./UserLoginReducer";

export const rootReducer = combineReducers({
  cartReducer,
  categoryReducer,
  favoriteReducer,
  pageReducer,
  prodDetailReducer,
  productsReducer,
  weekProdReducer,
  usersReducer,
  ordersReducer,
  userLoginReducer,
});
