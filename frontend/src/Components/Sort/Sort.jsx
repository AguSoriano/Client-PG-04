import React from "react";
import { useDispatch } from "react-redux";
import style from "./Sort.module.css";

import { OrderAlphabetical, OrderPrice } from "../../redux/actions";

function Sort({ setOrder, setPage }) {
  const dispatch = useDispatch();

  function handleSort(e) {
    e.preventDefault();
    dispatch(OrderAlphabetical(e.target.value));
    setOrder(e.target.value);
    setPage(0);
  }

  function handleSortByPrice(e) {
    e.preventDefault();
    dispatch(OrderPrice(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div className={style.sort}>
      <section>
        <select onChange={(e) => handleSort(e)}>
          <option value="order"> ALFABÉTICO </option>
          <option value="A-Z"> Ascendente </option>
          <option value="Z-A"> Descendente </option>
        </select>
        <select onChange={(e) => handleSortByPrice(e)}>
          <option value="precio"> PRECIO </option>
          <option value="min_price"> Menor precio </option>
          <option value="max_price"> Mayor precio </option>
        </select>
      </section>
    </div>
  );
}

export default Sort;
