import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions/Products/ProductsAction";
import { setPageAct } from "../../redux/actions/Page/PageAction";
import style from "./searchBar.module.css";
import swal from "sweetalert";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameProduct(name)).then((resp) => {
      if (resp.code && resp.code === "ERR_BAD_REQUEST") {
        swal("There is not product with that name");
      }
    });
    setName("");
    dispatch(setPageAct(0));
  }

  return (
    <div className={style.buscar}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => handleInputChange(e)}
        />
        <div className={style.btn}>
          <i
            class="fas fa-search icon"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          ></i>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
