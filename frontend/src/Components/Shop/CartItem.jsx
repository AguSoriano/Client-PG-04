import React from "react";
import * as ReactRedux from "react-redux";
import { removeOneProducts } from "../../redux/actions";

function CartItem({ price, image, name, id }) {
  const dispatch = ReactRedux.useDispatch();

  const removeCart = () => {
    dispatch(removeOneProducts(id));
  };

  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "1rem"}}>
      <h4> {name}</h4>
      <h5>${price}</h5>
      
  
      <button onClick={removeCart}>x</button>
    </div>
  );
}

export default CartItem;
