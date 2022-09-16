import React from "react";
import * as ReactRedux from "react-redux";
import { removeOneProducts } from "../../redux/actions/Cart/CartAction";
import style from "./Shop.module.css";



function CartItem({ price, image, name, id }) {


  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );
  const data = {id, loginUser}
  const removeCart = () => {
    dispatch(removeOneProducts(data));
    // dispatch(removeOneProducts(id, userId));
  };

  return (
    <div className={style.items}>
      <h4 className={style.name}> {name}</h4>
      <img className={style.img} src={image} alt={name} />
      <h5>${price}</h5>

      <button onClick={removeCart}>x</button>
    </div>
  );
}

export default CartItem;
