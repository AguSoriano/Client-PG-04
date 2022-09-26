import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import * as ReactRedux from "react-redux";
import caneDefaul from "../Img/PG0.png";
import Categories from "./Categories";

function Normal() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );
  const navigate = useNavigate();

  return (
    <div className={style.navBar}>
      <main className={style.logo}>
        <img alt="cane" src={caneDefaul} onClick={() => navigate("/")} />
      </main>
      <div>
        <SearchBar />
        <section className={style.links}>
          <Categories />
          {/* <Link className={style.link} to={"/about"}>
            Categorias
          </Link> */}
          {/* <Link className={style.link} to={"/home"}>
            Tienda
          </Link> */}
          <Link className={style.link} to={"/tarifas"}>
            Costos y Tarifas
          </Link>
          <Link className={style.link} to={"/history"}>
            Historial
          </Link>
          <Link className={style.link} to={"/profile/favorite"}>
            Favoritos
          </Link>
        </section>
      </div>
      <section>
        {!isAuthenticated || !loginUser.email ? (
          <button
            onClick={() => loginWithRedirect()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <BiUser size="1.5rem" />
            Ingresar
          </button>
        ) : (
          <>
            <Link to="/profile" className={style.link}>
              Mi cuenta
            </Link>
            {loginUser.isDisable ? (
              <></>
            ) : loginUser.rol === "admin" || loginUser.rol === "mododios" ? (
              <Link className={style.link} to={"/admin"}>
                Panel de administrador
              </Link>
            ) : (
              <></>
            )}
          </>
        )}
        <Link className={style.link} to={"/shop"}>
          <FaCartArrowDown size="1.5rem" />
        </Link>
      </section>
    </div>
  );
}

export default Normal;
