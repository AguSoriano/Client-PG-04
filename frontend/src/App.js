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
import { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import {
  cleanUserLogin,
  getUserLogin,
} from "./redux/actions/Users/UsersActions";
import UserDetail from "./Components/Admin/Users/Detail/UserDetail";
import UserEdit from "./Components/Admin/Users/Edit/UserEdit";
import UserDisable from "./Components/UserDisable/UserDisable";
import EditData from "./Components/Profile/Extras/EditData";
import OrderDetail from "./Components/Admin/Orders/Detail/OrderDetail";
import Newsletter from "./Components/Newsletter/Newsletter";
import HistoryOrders from "./Components/History Orders/HistoryOrders";
import OrderDetailUser from "./Components/History Orders/Detail/OrderDetailUser";
import ToDo from "./Components/Profile/Extras Admin/ToDo";
import ReportBug from "./Components/Profile/Extras Admin/ReportBug";
import ContactAdmin from "./Components/Profile/Extras Admin/ContactAdmin";
import Comments from "./Components/Profile/Extras Admin/Comments";
import { addToCart, setLogin } from "./redux/actions/Cart/CartAction";
import HomeSearch from "./Components/Home for Search/HomeSearch";
import HistoryView from "./Components/History View/HistoryView";
import HomeCategories from "./Components/Home Categories/HomeCategories";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserLogin(user.email));
      // console.log("acaestoy")
      // console.log("LOGIN", isLogin)
      // console.log("USER", user)
      // console.log("LOGINUSER", loginUser)
      // console.log("voy a ejecutar cartLogin")
      // cartLogin(loginUser);
      // setIsLogin(false)
    }
    if (!isAuthenticated) {
      dispatch(cleanUserLogin());
      dispatch(setLogin(true));
    }
  }, [dispatch, isAuthenticated, user]);

  // useEffect(()=>{
  //   if (isAuthenticated) {
  //     console.log("acaestoy")

  //       console.log("LOGIN", isLogin)
  //       console.log("voy a ejecutar cartLogin")
  //       cartLogin();
  //       setIsLogin(false)}
  // }, [dispatch, isAuthenticated, user])

  // const cartLogin =  (loginUser) => {
  //   console.log("estoy en cartLogin")
  //   const items = JSON.parse(window.localStorage.getItem("cartState"));
  //   console.log("ITEMS", items)
  //   console.log("USER", loginUser)
  //   try {
  //     return (dispatch) => {
  //       items.cartproduct.map((e) => {
  //         let data = { e, loginUser };
  //         console.log("cartloginDATA", Data)
  //         dispatch(addToCart(data));
  //       });
  //     };
  //   } catch (error) {
  //     console.log("soy un error")
  //     console.log(error);
  //   }
  // };

  return (
    <div className="App">
      <NavBar path="/" element={NavBar} />
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <LandingPage />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <LandingPage />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="about"
          element={
            !isAuthenticated ? (
              <About />
            ) : !loginUser.isDisable ? (
              <About />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="home"
          element={
            !isAuthenticated ? (
              <Home />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <Home />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="homecategories"
          element={
            !isAuthenticated ? (
              <HomeCategories />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <HomeCategories />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="homesearch"
          element={
            !isAuthenticated ? (
              <HomeSearch />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <HomeSearch />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/favorite"
          element={
            !isAuthenticated ? (
              <Favorite />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <Favorite />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="history"
          element={
            !isAuthenticated ? (
              <HistoryView />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <HistoryView />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="shop"
          element={
            !isAuthenticated ? (
              <Shop />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Navigate to="/admin" />
            ) : !loginUser.isDisable ? (
              <Shop />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route exact path="terms" element={<Terms />} />
        <Route exact path="newsletter" element={<Newsletter />} />
        <Route exact path="privacy" element={<Privacy />} />

        {/*---------------------------------------------------------------------------*/}
        {/* Products */}
        <Route
          path="products/:id"
          element={
            !isAuthenticated ? (
              <Detail />
            ) : !loginUser.isDisable ? (
              <Detail />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route exact path="products/payment" element={<PaymentCreate />} />
        <Route exact path="products/checkout" element={<CheckoutSuccess />} />
        <Route exact path="products/contact" element={<Mailer />} />
        <Route exact path="products/contact/reviews" element={<Reviews />} />

        {/*---------------------------------------------------------------------------*/}
        {/* Profile */}
        <Route
          path="profile"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <Profile />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/data"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <Data />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/data/edit/:id"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <EditData />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/cards"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <Cards />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/historyorders"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <HistoryOrders />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/historyorders/detail/:id"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <OrderDetailUser />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/adress"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : !loginUser.isDisable ? (
              <Adress />
            ) : (
              <Navigate to="/userdisable" />
            )
          }
        />
        <Route
          path="profile/ask"
          element={isAuthenticated ? <Ask /> : <Navigate to="/" />}
        />

        {/*--------------------------------------------------------------------------*/}
        {/* Admin */}
        <Route
          path="admin"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ProfileAdmin />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="profile/admin/todo"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ToDo />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="profile/admin/reportbug"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ReportBug />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="profile/admin/contactowner"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ContactAdmin />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="profile/admin/comments"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Comments />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/users"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Users />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/users/detail/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <UserDetail />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/users/edit/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <UserEdit />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/products"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Products />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/products/detail/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ProductDetail />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/products/newproduct"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ProductCreate />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/products/edit/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <ProductEdit />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/categories"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Categories />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/categories/detail/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <CategoryDetail />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/categories/newcategory"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <CategoryCreate />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/categories/edit/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <CategoryEdit />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/orders"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Orders />
            ) : (
              <ErrorRoute />
            )
          }
        />
        <Route
          path="admin/orders/detail/:id"
          element={
            !isAuthenticated ? (
              <ErrorRoute />
            ) : loginUser.isDisable ? (
              <ErrorRoute />
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <OrderDetail />
            ) : (
              <ErrorRoute />
            )
          }
        />

        {/*--------------------------------------------------------------------------*/}
        {/* Others */}
        <Route path="/userdisable" element={<UserDisable />} />
        <Route path="/*" element={<ErrorRoute />} />
      </Routes>
    </div>
  );
}

export default App;
