import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import style from "./UserDisable.module.css";
import { ImSad } from "react-icons/im";
import { MdOutlineLiveHelp } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

function UserDisable() {
  const { logout } = useAuth0();
  return (
    <div className={style.userDisable}>
      <ImSad className={style.sadIcon} />
      <h1>Lo sentimos</h1>
      <h2>Tu usuario esta deshabilitado</h2>
      <h2>Por favor contacta con el administrador en el siguiente enlace:</h2>
      <Link to={"/profile/ask"} className={style.helpLink}>
        <MdOutlineLiveHelp /> Ayuda
      </Link>
      <button onClick={logout}>
        <RiLogoutBoxLine /> Cerrar Sesion
      </button>
    </div>
  );
}

export default UserDisable;
