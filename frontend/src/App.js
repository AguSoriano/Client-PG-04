import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Components/Detail/Detail";
import LandingPage from "./Components/LandingPage/LandinPage";
import ProductCreate from "./Components/Admin/Products/Create/ProductCreate";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Terms from "./Components/Footer/Terms";
import Privacy from "./Components/Footer/PrivacyTerms";
import Favorite from "./Components/Favorite/Favorite";
import Shop from "./Components/Shop/Shop";
import Data from "./Components/Profile/Extras/Data";
import Cards from "./Components/Profile/Extras/Cards";
import Adress from "./Components/Profile/Extras/Adress";
import Ask from "./Components/Profile/Extras/Ask";
import Mailer from "./Components/Mailer/Mailer";
import Reviews from "./Components/Reviews/Reviews";
import ProfileAdmin from "./Components/Admin/Profile/ProfileAdmin";
import Users from "./Components/Admin/Users/Users";
import Products from "./Components/Admin/Products/Products";
import Categories from "./Components/Admin/Categories/Categories";
import Orders from "./Components/Admin/Orders/Orders";
import PaymentCreate from "./Components/PayMents/PaymentCreate/PaymentCreate";
import CheckoutSuccess from "./Components/PayMents/CheckoutSuccess/CheckoutSuccess";
import CategoryCreate from "./Components/Admin/Categories/Create/CategoryCreate";
import CategoryEdit from "./Components/Admin/Categories/Edit/CategoryEdit";
import ProductEdit from "./Components/Admin/Products/Edit/ProductEdit";
import CategoryDetail from "./Components/Admin/Categories/Detail/CategoryDetail";
import ProductDetail from "./Components/Admin/Products/Detail/ProductDetail";
import { useAuth0 } from "@auth0/auth0-react";
import ErrorRoute from "./Components/Error Route/ErrorRoute";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import {
  cleanUserLogin,
  getUserLogin,
} from "./redux/actions/Users/UsersActions";
import UserDetail from "./Components/Admin/Users/Detail/UserDetail";
import UserEdit from "./Components/Admin/Users/Edit/UserEdit";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserLogin(user.email));
    }
    if (!isAuthenticated) {
      dispatch(cleanUserLogin());
    }
  }, [dispatch, isAuthenticated, user]);

  return (
    <div className="App">
      <NavBar path="/" element={NavBar} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="terms" element={<Terms />} />
        <Route exact path="privacy" element={<Privacy />} />
        <Route exact path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* Products */}
        <Route exact path="products/:id" element={<Detail />} />
        <Route exact path="products/payment" element={<PaymentCreate />} />
        <Route exact path="products/checkout" element={<CheckoutSuccess />} />
        <Route exact path="products/contact" element={<Mailer />} />
        <Route exact path="products/contact/reviews" element={<Reviews />} />
        {/* Profile */}
        <Route
          path="profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
        />
        <Route
          path="profile/data"
          element={isAuthenticated ? <Data /> : <Navigate to="/" />}
        />
        <Route
          path="profile/cards"
          element={isAuthenticated ? <Cards /> : <Navigate to="/" />}
        />
        <Route
          path="profile/favorite"
          element={isAuthenticated ? <Favorite /> : <Navigate to="/" />}
        />
        <Route
          path="profile/adress"
          element={isAuthenticated ? <Adress /> : <Navigate to="/" />}
        />
        <Route
          path="profile/ask"
          element={isAuthenticated ? <Ask /> : <Navigate to="/" />}
        />
        {/* Admin */}
        <Route path="admin" element={<ProfileAdmin />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/users/detail/:id" element={<UserDetail />} />
        <Route path="admin/users/edit/:id" element={<UserEdit />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/products/detail/:id" element={<ProductDetail />} />
        <Route path="admin/products/newproduct" element={<ProductCreate />} />
        <Route path="admin/products/edit/:id" element={<ProductEdit />} />
        <Route path="admin/categories" element={<Categories />} />
        <Route
          path="admin/categories/detail/:id"
          element={<CategoryDetail />}
        />
        <Route
          path="admin/categories/newcategory"
          element={<CategoryCreate />}
        />
        <Route path="admin/categories/edit/:id" element={<CategoryEdit />} />
        <Route path="admin/orders" element={<Orders />} />
        {/* Others */}
        <Route path="/*" element={<ErrorRoute />} />
      </Routes>
    </div>
  );
}

export default App;
