import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import style from "./CardOrder.module.css";

function CardOrder({ order, handleSubmit, handleSelect }) {
  const estados = ["Completada", "Procesanda", "Rechazada", "Entregada"];

  return (
    <form onSubmit={(e) => handleSubmit(e, order.id)} className={style.form}>
      <select onChange={(e) => handleSelect(e)}>
        <option value="">Estado</option>
        {estados.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
      <BsCheckCircle
        className={style.icon}
        onClick={(e) => handleSubmit(e, order.id)}
      />
    </form>
  );
}

export default CardOrder;
