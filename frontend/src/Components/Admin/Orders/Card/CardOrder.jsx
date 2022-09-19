import React from "react";
import { Link } from "react-router-dom";

function CardOrder({ order }) {
  return (
    <div
      key={order.id}
      style={{ display: "flex", gap: "2rem", textAlign: "left" }}
    >
      <Link to={`/admin/orders/detail/${order.id}`}>
        <p>creada: {order.createdAt.slice(0, 10)}</p>
        <p>{order.email}</p>
        <p>{order.status}</p>
        <p>$ {order.products.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)}</p>
        <p>modificada: {order.updatedAt.slice(0, 10)}</p>
      </Link>
    </div>
  );
}

export default CardOrder;
