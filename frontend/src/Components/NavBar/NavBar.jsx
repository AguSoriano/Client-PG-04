import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import * as ReactRedux from "react-redux";
import { register } from "../../redux/actions/Users/UsersActions";

function NavBar() {
  const dispatch = ReactRedux.useDispatch();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  // console.log(JSON.stringify(user));
  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(register(user));
    }
  }, [dispatch, isAuthenticated, user]);

  return (
    <div className={style.navBar}>
      <section>
        <SearchBar />
      </section>
      <section className={style.links}>
        <Link className={style.link} to={"/about"}>
          Sobre Nosotros
        </Link>
        <Link className={style.link} to={"/home"}>
          Tienda
        </Link>

        <Link className={style.link} to={"/shop"}>
          <FaCartArrowDown size="1.5rem" />
        </Link>
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
              Perfil
            </Link>
            {loginUser.rol === "admin" ? (
              <Link className={style.link} to={"/admin"}>
                Panel de administrador
              </Link>
            ) : (
              <Link className={style.link} to={"/profile/favorite"}>
                Favoritos <FaHeart />
              </Link>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default NavBar;
