import React, { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import {
  editStatusOrder,
  getAllOrders,
} from "../../../redux/actions/Cart/CartAction";
import Pagination from "../Pagination/PaginationAdmin";
import CardOrder from "./Card/CardOrder";
import FilterOrders from "./Filter/FilterOrders";

function Orders() {
  const dispatch = ReactRedux.useDispatch();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const [page, setPage] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getAllOrders(loginUser));
  }, [dispatch, loginUser]);

  const { allOrders } = ReactRedux.useSelector((state) => state.ordersReducer);
  const ordersPerPage = allOrders
    .filter((ord) => ord.status !== "carrito")
    .slice(page, page + 12);

  const handleSelect = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    dispatch(editStatusOrder(id, loginUser, input));
    // setInput(e.target.value);
    // navigate(-1);
  };

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
            <CardOrder
              loginUser={loginUser}
              order={order}
              key={order.id}
              handleSelect={handleSelect}
              handleSubmit={handleSubmit}
            />
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
