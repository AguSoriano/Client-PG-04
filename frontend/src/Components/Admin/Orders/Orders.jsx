import React, { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { getAllOrders } from "../../../redux/actions/Cart/CartAction";
import Pagination from "../Pagination/PaginationAdmin";
import CardOrder from "./Card/CardOrder";
import FilterOrders from "./Filter/FilterOrders";

function Orders() {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getAllOrders(loginUser));
  }, [dispatch, loginUser]);

  const { allOrders } = ReactRedux.useSelector((state) => state.ordersReducer);
  const ordersPerPage = allOrders
    .filter((ord) => ord.status !== "carrito")
    .slice(page, page + 12);

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
            <CardOrder loginUser={loginUser} order={order} key={order.id} />
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
