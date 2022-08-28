import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.navBar}>
      <section>
        <SearchBar />
      </section>
      <section>
        <Filter />
        <Link to={"/home"}>Home</Link>
        <Link to={"/"}>Sign In</Link>
        <Link to={"/"}>Cart</Link>
        <Link to={"/"}>Favorites</Link>
        <Link to={"/"}>Post</Link>
      </section>
    </div>
  );
}

export default NavBar;
