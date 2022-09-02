import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";
import { FaHeart, FaCartArrowDown, } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

function NavBar() {
  return (
    <div className={style.navBar}>
      <section>
        <SearchBar />
      </section>
      <section className={style.links}>
        <Link className={style.link} to={"/about"}>Sobre Nosotros</Link>
        <Link className={style.link} to={"/home"}>Tienda</Link>
        {/* <Link className={style.link} to={"/"}>Post</Link> */}
        <Link className={style.link} to={"/"}> <AiOutlineTeam size='1.5rem' />Ingresar</Link>
        <Link className={style.link} to={"/"}> Favoritos <FaHeart /></Link>
        <Link className={style.link} to={"/"}><FaCartArrowDown size='1.5rem' /></Link>
      </section>
    </div>
  );
}

export default NavBar;
