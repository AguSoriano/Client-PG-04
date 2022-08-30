import React, { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { filterBy, getCategories } from "../../redux/actions";
import style from "./Filter.module.css"

function Filter() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = ReactRedux.useSelector((state) => state.categories);

  const handleSelect = (e) => {
    e.preventDefault(e);
    dispatch(filterBy(e.target.value));
  };

  return (
    <select className={style.select} onChange={(e) => handleSelect(e)}>
      <option value="all">Categorias</option>
      {categories.length > 1 ? (
        categories.map((cat) => (
          <option value={cat.name} key={cat.id}>
            {cat.name.toUpperCase()}
          </option>
        ))
      ) : (
        <option>Sin Registros</option>
      )}
    </select>
  );
}

export default Filter;
