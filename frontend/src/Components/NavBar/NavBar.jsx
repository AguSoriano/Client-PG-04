import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as ReactRedux from "react-redux";
import { getUserLogin, register } from "../../redux/actions/Users/UsersActions";
import Normal from "./Normal";
import Admin from "./Admin";
import { addToCart } from "../../redux/actions/Cart/CartAction";
// import { cartLogin } from "../../redux/actions/Cart/CartAction";

function NavBar() {
  const dispatch = ReactRedux.useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const { isLogin, setIsLogin } = useState(true)
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    if (isAuthenticated) {
      // if(isLogin){
      //   console.log("LOGIN", isLogin)
      dispatch(register(user));
        // dispatch(getUserLogin())
        // console.log("voy a ejecutar cartLogin")
        // cartLogin();
        // setIsLogin(false)
      // }
    }
  }, [dispatch, isAuthenticated, user]);

  // const cartLogin = () => {
  //   console.log("estoy en cartLogin")
  //   const items = JSON.parse(window.localStorage.getItem("cartState"));
  //   console.log("USER", loginUser)
  //   try {
  //     return async (dispatch) => {
  //       items.cartproduct.map((e) => {
  //         let data = { e, loginUser };
  //         dispatch(addToCart(data));
  //       });
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      {loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
        <Admin />
      ) : (
        <Normal />
      )}
    </div>
  );
}

export default NavBar;
