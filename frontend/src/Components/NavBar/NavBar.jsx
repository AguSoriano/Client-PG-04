import React /* useEffect */ from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import style from "./NavBar.module.css";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
// import * as ReactRedux from "react-redux";
// import { register } from "../../redux/actions";

function NavBar() {
  // const dispatch = ReactRedux.useDispatch();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(register(user));
  //   }
  // }, [isAuthenticated]);

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
        {isAuthenticated ? (
          <>
            <Link to="/profile" className={style.link}>
              Perfil
            </Link>
            <Link className={style.link} to={"/profile/favorite"}>
              Favoritos <FaHeart />
            </Link>
          </>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <BiUser size="1.5rem" />
            Ingresar
          </button>
        )}
      </section>
    </div>
  );
}

export default NavBar;
