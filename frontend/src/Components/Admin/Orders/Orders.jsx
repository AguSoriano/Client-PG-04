import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../../redux/actions/Cart/CartAction";

function Orders() {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getAllOrders(loginUser));
  }, [dispatch, loginUser]);

  const { allOrders } = ReactRedux.useSelector((state) => state.cartReducer);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {allOrders.length
        ? allOrders.map((order, i) => (
            <Link
              to={`/admin/orders/detail/${order.id}`}
              key={order.id}
              style={{ display: "flex", gap: "2rem", textAlign: "left" }}
            >
              <p>{i + 1}</p>
              <p>{order.status}</p>
            </Link>
          ))
        : "Cargando"}
    </div>
  );
}

export default Orders;
