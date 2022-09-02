import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={style.navBar}>
      <section>
        <SearchBar />
      </section>
      <section className={style.links}>
        <Link className={style.link} to={"/home"}>
          Tienda
        </Link>
        {/* <Link className={style.link} to={"/"}>Post</Link> */}
        <button
          onClick={() => loginWithRedirect()}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <AiOutlineTeam size="1.5rem" />
          Ingresar
        </button>
        {/* <Link className={style.link} to={loginWithRedirect}>
          Ingresar
        </Link> */}
        <Link className={style.link} to={"/"}>
          {" "}
          Favoritos <FaHeart />
        </Link>
        <Link className={style.link} to={"/"}>
          <FaCartArrowDown size="1.5rem" />
        </Link>
        <Link to="/profile">PERFIL</Link>
      </section>
    </div>
  );
}

export default NavBar;
