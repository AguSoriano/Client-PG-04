import React, { useEffect } from "react";
import { useState } from "react";
import * as ReactRedux from "react-redux";
import {
  filterBy,
  filterBy2,
} from "../../redux/actions/Products/ProductsAction";
import { getCategories } from "../../redux/actions/Categories/CategoryAction";
import { setPageAct } from "../../redux/actions/Page/PageAction";
import style from "./Filter.module.css";

function Filter() {
  const dispatch = ReactRedux.useDispatch();
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // const categories = ReactRedux.useSelector((state) => state.categories);

  const handleSelect = (e) => {
    e.preventDefault();
    setFiltro(e.target.value);
    dispatch(filterBy(e.target.value));
    dispatch(setPageAct(0));
  };

  const handleSelect2 = (e) => {
    e.preventDefault();
    dispatch(filterBy2(e.target.value));
    dispatch(setPageAct(0));
  };

  return (
    <div className={style.fMain}>
      <select className={style.select1} onChange={(e) => handleSelect(e)}>
        <option value="all">CATEGORIAS</option>
        <option value="all">Todos</option>
        <option value="medallon">Medallones</option>
        <option value="tarta">Tartas</option>
        <option value="pasta rellena">Pastas</option>
        <option value="bebida">Bebidas</option>
      </select>
      {filtro === "medallon" ? (
        <select className={style.select2} onChange={(e) => handleSelect2(e)}>
          <option value="all">SUBCATEGORIAS</option>
          <option value="all">Todos</option>
          <option value="soja">Soja</option>
          <option value="garbanzo">Garbanzo</option>
          <option value="arveja">Arveja</option>
          <option value="vegano">Vegano</option>
          <option value="con relleno">Relleno</option>
          <option value="sin relleno">Sin relleno</option>
        </select>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Filter;
