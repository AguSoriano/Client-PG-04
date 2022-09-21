import React from "react";
import * as ReactRedux from "react-redux";
import { removeOneProducts } from "../../redux/actions/Cart/CartAction";
import style from "./Shop.module.css";
import {AiOutlineDelete } from "react-icons/ai";

function CartItem({ price, image, name, id, quantity }) {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const data = { id, loginUser };
  const removeCart = () => {
    dispatch(removeOneProducts(data));
    // dispatch(removeOneProducts(id, userId));
  };

  return (
    <div className={style.container1}>
      <div>
      <img  src={image} alt={name} />
      <h4 className={style.name}> {name}</h4>
      <h5>Cantidad: {quantity}</h5>
      <h5>Unidad: ${price}</h5>
  
      <h5>Total: ${(price*quantity)}</h5>
      <>
      
      <button className={style.delete}onClick={removeCart}><AiOutlineDelete size="2rem" color="red"/></button>
      </>
      </div>
      
    </div>
  );
}

export default CartItem;
