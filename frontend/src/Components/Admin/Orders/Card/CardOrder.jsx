import React from "react";
import { Link } from "react-router-dom";

function CardOrder({ order, handleSubmit, handleSelect }) {
  const estados = ["procesando", "completada", "rechazada", "entregada"];

  return (
    <div
      key={order.id}
      style={{ display: "flex", gap: "2rem", textAlign: "left" }}
    >
      <Link to={`/admin/orders/detail/${order.id}`}>
        <p>creada: {order.createdAt.slice(0, 10)}</p>
        <p>{order.email}</p>
        <p>{order.status}</p>
        <p>
          ${" "}
          {order.products.reduce(
            (acc, prod) => acc + prod.price * prod.quantity,
            0
          )}
        </p>
        <p>modificada: {order.updatedAt.slice(0, 10)}</p>
      </Link>
      <form onSubmit={(e) => handleSubmit(e, order.id)}>
        <select onChange={(e) => handleSelect(e)}>
          <option value={order.status}>{order.status}</option>
          {estados
            .filter((e) => e !== order.status)
            .map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
        </select>
        <button type="submit">modificar</button>
      </form>
    </div>
  );
}

export default CardOrder;
