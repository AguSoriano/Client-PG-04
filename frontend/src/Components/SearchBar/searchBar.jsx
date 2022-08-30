import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct, setPageAct } from "../../redux/actions/index";
import style from "./searchBar.module.css";

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
        alert("There is not product with that name");
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
