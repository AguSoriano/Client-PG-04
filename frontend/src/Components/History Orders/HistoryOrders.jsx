import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { getUserOrders } from "../../redux/actions/Users/UsersActions";

function HistoryOrders() {
  const dispatch = ReactRedux.useDispatch();

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getUserOrders(loginUser));
  }, [dispatch, loginUser]);

  const { oneUserOrders } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );

  return (
    <div>
      {oneUserOrders.length
        ? oneUserOrders.map((order) => (
            <div key={order.id}>
              <p>
                {order.createdAt.slice(8, 10)}/
                {order.createdAt.slice(5, 7) /*== "09" ? "Septiembre" : ""*/}/
                {order.createdAt.slice(0, 4)}
              </p>
              <p>{order.status}</p>
            </div>
          ))
        : "No hay ordenes para mostrar"}
    </div>
  );
}

export default HistoryOrders;
