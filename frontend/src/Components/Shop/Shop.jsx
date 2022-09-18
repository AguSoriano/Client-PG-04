import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { removeAllCart } from "../../redux/actions/Cart/CartAction";
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
  const userId = useSelector((state) => state.userLoginReducer.loginUser.id);
  const [buy, setBuy] = useState(false);

  const dispatch = ReactRedux.useDispatch();
  const { cartproduct } = ReactRedux.useSelector((state) => state.cartReducer);
  console.log("cartttt", cartproduct)
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const clearCart = () => {
    dispatch(removeAllCart(loginUser));
  };

  const priceTotal = () => {
    return cartproduct?.reduce((acc, prod) => acc + prod.prodDetail.price, 0);
  };

  const payment = () => {
    dispatch(getClientSecret(userId));
    setBuy(true);
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
              {buy === false && (
                <button className={style.button1} onClick={payment}>
                  Comprar
                </button>
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

      {buy === true && isAuthenticated && (
        <div className={style.payment}>
          <div>
            <PaymentCreate userId={userId} />
          </div>
        </div>
      )}

      {buy === true && !isAuthenticated ? (
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
