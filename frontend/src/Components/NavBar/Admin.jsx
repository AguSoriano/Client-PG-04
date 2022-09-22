import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBarAdmin.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import caneLogo from "../Img/Logo1V2.png";

function Admin() {
  const { logout } = useAuth0();

  return (
    <div className={style.navBar}>
      <section className={style.links}>
        <img alt="cane" src={caneLogo} className={style.imgCane} />
        <Link className={style.link} to={"/admin"}>
          <FaChalkboardTeacher className={style.icon} /> Panel
        </Link>
        <h3 className={style.h3admin}>BIENVENIDO ADMINISTRADOR</h3>
        <Link to="/profile" className={style.link}>
          <BsInfoSquareFill className={style.icon} /> Extra
        </Link>
        <button onClick={logout} className={style.btn}>
          <RiLogoutBoxRFill className={style.icon} /> Salir
        </button>
      </section>
    </div>
  );
}

export default Admin;
