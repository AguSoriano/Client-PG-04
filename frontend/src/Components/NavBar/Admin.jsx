import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdLogOut } from "react-icons/io";

function Admin() {
  const { logout } = useAuth0();

  return (
    <div className={style.navBar}>
      <section className={style.links}>
        <Link className={style.link} to={"/admin"}>
          <h3>BIENVENIDO ADMINISTRADOR</h3>
        </Link>
        <Link to="/profile" className={style.link}>
          <h3>Mi Cuenta</h3>
        </Link>
        <button onClick={logout} className={style.btn}>
          <IoMdLogOut className={style.icon} />
        </button>
      </section>
    </div>
  );
}

export default Admin;
