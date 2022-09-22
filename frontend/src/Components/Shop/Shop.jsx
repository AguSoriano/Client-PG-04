import React, { useState, useEffect } from "react";
import * as ReactRedux from "react-redux";
import {
  removeAllCart,
  setLogin,
  addToCart,
} from "../../redux/actions/Cart/CartAction";
import CartItem from "./CartItem";
import style from "./Shop.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PaymentCreate from "../PayMents/PaymentCreate/PaymentCreate";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getClientSecret } from "../../redux/actions/Stripe/Stripe";

function Shop() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [buy, setBuy] = useState(false);
  const { cartproduct } = ReactRedux.useSelector((state) => state.cartReducer);
  const { cartLoginRed } = ReactRedux.useSelector((state) => state.cartReducer);
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      if (cartLoginRed) {
        cartLogin();
        dispatch(setLogin(false));
      }
    }
  }, [dispatch, isAuthenticated, user]);

  const clearCart = () => {
    dispatch(removeAllCart(loginUser));
  };

  const priceTotal = () => {
    return cartproduct?.reduce(
      (acc, prod) => acc + prod.prodDetail.price * prod.quantity,
      0
    );
  };

  const payment = () => {
    if (loginUser.id && isAuthenticated && cartproduct?.length > 0) {
      dispatch(getClientSecret(loginUser.id));
      setBuy(true);
    }
  };

  const cartLogin = () => {
    const items = JSON.parse(window.localStorage.getItem("cartState"));
    items.cartproduct.map((e) => {
      let prodTotal = e;
      let data = { prodTotal, loginUser };
      dispatch(addToCart(data));
    });
  };

  return (
    <div>
      {buy === false && (
        <div className={style.container}>
          <h2> Tu carrito de compras</h2>
          <div>
            <div>
              {cartproduct?.length ? (
                cartproduct.map((p) => (
                  <CartItem
                    className={style.cardDiv}
                    key={p.prodDetail.id}
                    name={p.prodDetail.name}
                    price={p.prodDetail.price}
                    quantity={p.quantity}
                    id={p.prodDetail.id}
                    image={p.prodDetail.image}
                  />
                ))
              ) : (
                <div>
                  <spam> Tu carrito esta vacio </spam>
                </div>
              )}
            </div>
          </div>

          {cartproduct?.length ? (
            <h3>Total sin impuestos: ${priceTotal()}</h3>
          ) : (
            <></>
          )}
          {cartproduct?.length ? (
            <div>
              {!isAuthenticated || !loginUser.email ? (
                <button
                  className={style.button1}
                  onClick={() => loginWithRedirect()}
                >
                  Comprar
                </button>
              ) : (
                buy === false && (
                  <button className={style.button1} onClick={payment}>
                    Comprar
                  </button>
                )
              )}
              <button className={style.button1} onClick={clearCart}>
                VACIAR CARRITO
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}

      {buy === true &&
      isAuthenticated &&
      loginUser.id &&
      cartproduct?.length > 0 ? (
        <div className={style.payment}>
          <div>
            <PaymentCreate userId={loginUser.id} />
          </div>
        </div>
      ) : null}

      {buy === true &&
      !isAuthenticated &&
      !loginUser.id &&
      cartproduct?.length > 0 ? (
        <>
          <button
            onClick={() => loginWithRedirect()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <BiUser size="1.5rem" />
            Login
          </button>
        </>
      ) : null}
    </div>
  );
}
export default Shop;
