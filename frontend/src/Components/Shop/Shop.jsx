import React from "react";
import * as ReactRedux from "react-redux";
import { removeAllCart } from "../../redux/actions/index";
import CartItem from "./CartItem";

function Shop() {
  const dispatch = ReactRedux.useDispatch();

  const cartItems = ReactRedux.useSelector((state) => state.cartproduct);

  const clearCart = () => {
    dispatch(removeAllCart());
  };

  const priceTotal = () => {
    return cartItems?.reduce((acc, prod) => acc + prod.price, 0);
  };
  // const deleteFromCart = () => {};

  return (
    <div>
      <h2> Tu Carrito </h2>
     
      <h3>PRODUCTOS</h3>
      {/* <h3> carrito</h3> */}

      {cartItems?.length ? (
        cartItems.map((p) => (
          <CartItem key={p.id} name={p.name} price={p.price} id={p.id} img={p.image}/>
        ))
      ) : (
        <spam> Tu carrito esta vacio </spam>
      )}

      {cartItems?.length ? <h3>Total sin impuestos: ${priceTotal()}</h3> : <></>}
      <button onClick={clearCart}> Limpiar Carrito</button>
    </div>
  );
}
export default Shop;
