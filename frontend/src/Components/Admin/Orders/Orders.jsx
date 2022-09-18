import React, { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../../redux/actions/Cart/CartAction";
import Pagination from "../Pagination/PaginationAdmin";
import FilterOrders from "./Filter/FilterOrders";

function Orders() {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector((state) => state.userLoginReducer);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getAllOrders(loginUser));
  }, [dispatch, loginUser]);

  const { allOrders } = ReactRedux.useSelector((state) => state.ordersReducer);
  const ordersPerPage = allOrders.slice(page, page + 12);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FilterOrders setPage={setPage} />
      {allOrders.length ? (
        <div>
          {ordersPerPage.map((order, i) => (
            <Link
              to={`/admin/orders/detail/${order.id}`}
              key={order.id}
              style={{ display: "flex", gap: "2rem", textAlign: "left" }}
            >
              <p>{i + 1}</p>
              <p>{order.status}</p>
              <p>{order.email}</p>
              <p>$ {order.products.reduce((acc, prod) => acc + prod.price, 0)}</p>
            </Link>
          ))}
        </div>
      ) : (
        "No hay ordenes"
      )}
      <Pagination setPage={setPage} page={page} products={allOrders} />
    </div>
  );
}

export default Orders;
