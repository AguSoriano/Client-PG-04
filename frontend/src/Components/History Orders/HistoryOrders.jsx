import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
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
        ? oneUserOrders
            .filter((ord) => ord.status !== "carrito")
            .map((order) => (
              <Link
                to={`/profile/historyorders/detail/${order.id}`}
                key={order.id}
              >
                <p>
                  {order.createdAt.slice(8, 10)}/
                  {order.createdAt.slice(5, 7) /*== "09" ? "Septiembre" : ""*/}/
                  {order.createdAt.slice(0, 4)}
                </p>
                <p>{order.status}</p>
                <p>
                  $
                  {order.products.reduce(
                    (acc, prod) => acc + prod.price * prod.quantity,
                    0
                  )}
                </p>
              </Link>
            ))
        : "No hay ordenes para mostrar"}
    </div>
  );
}

export default HistoryOrders;
