import React from "react";
import * as ReactRedux from "react-redux";
import { removeAllCart } from "../../redux/actions/Cart/CartAction";
import CartItem from "./CartItem";
import style from "./Shop.module.css";
import { Link } from "react-router-dom";

function Shop() {
  const dispatch = ReactRedux.useDispatch();
  const { cartproduct } = ReactRedux.useSelector((state) => state.cartReducer);

  const clearCart = (loginUser) => {
    dispatch(removeAllCart(loginUser));
  };

  const priceTotal = () => {
    return cartproduct?.reduce((acc, prod) => acc + prod.price, 0);
  };

  return (
    <div className={style.container}>
      <h2> Tu carrito de compras</h2>
      <div>
        <div>
          {cartproduct?.length ? (
            cartproduct.map((p) => (
              <CartItem
                className={style.cardDiv}
                key={p.id}
                name={p.name}
                price={p.price}
                id={p.id}
                image={p.image}
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
          <Link className={style.link} to={"/products/payment"}>
            <button className={style.button1}> Comprar </button>
          </Link>
          <button className={style.button1} onClick={clearCart}>
            {" "}
            VACIAR CARRITO
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Shop;
