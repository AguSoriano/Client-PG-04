import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions/index";
import style from "./searchBar.module.css"

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
  }

  return (
    <div className={style.buscar}>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleInputChange(e)}
        />
        <div  className={style.btn}> 
        <i 
        class="fas fa-search icon" type="submit" onClick={(e) => handleSubmit(e)}>
        </i>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
