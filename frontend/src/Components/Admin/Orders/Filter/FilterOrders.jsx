import React from "react";
import * as ReactRedux from "react-redux";
import { filterOrderBy } from "../../../../redux/actions/Cart/CartAction";
import style from "./FilterOrders.module.css";

function FilterOrders(setPage) {
  const dispatch = ReactRedux.useDispatch();

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(filterOrderBy(e.target.value));
    setPage(0);
  };

  return (
    <div className={style.fMain}>
      <select className={style.select1} onChange={(e) => handleSelect(e)}>
        <option value="all">ESTADO</option>
        <option value="all">todas</option>
        <option value="carrito">carrito</option>
        <option value="procesando">procesando</option>
        <option value="completada">completada</option>
        <option value="rechazada">rechazada</option>
        <option value="entregada">entregada</option>
      </select>
    </div>
  );
}

export default FilterOrders;
