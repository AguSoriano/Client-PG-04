import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";

function Admin() {
  return (
    <div className={style.navBar}>
      <section>
        <SearchBar />
      </section>
      <section className={style.links}>
        <Link className={style.link} to={"/about"}>
          Hola Admin
        </Link>
        <Link to="/profile" className={style.link}>
          Perfil
        </Link>
        <Link className={style.link} to={"/admin"}>
          Panel de administrador
        </Link>
      </section>
    </div>
  );
}

export default Admin;
