import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions/Products/ProductsAction";
import { setPageAct } from "../../redux/actions/Page/PageAction";
import style from "./searchBar.module.css";
import swal from "sweetalert";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

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
    navigate("/homesearch");
    dispatch(setPageAct(0));
  }

  return (
    <div className={style.buscar}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" className={style.btn}>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
