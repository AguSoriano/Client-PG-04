import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import * as ReactRedux from "react-redux";
import style from "./Data.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { MdAlternateEmail, MdOutlinePlaylistAddCheck } from "react-icons/md";

function Data() {
  // const { user } = useAuth0();
  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);
  return (
    <div className={style.mainData}>
      <h2>Mis datos</h2>
      <section>
        <RiFileUserLine className={style.icon} />
        <div>
          <h3>Usuario</h3>
          <p>{loginUser.nickname}</p>
        </div>
      </section>
      <section>
        <FaRegUser className={style.icon} />
        <div>
          <h3>Nombre</h3>
          <p>{loginUser.given_name ? loginUser.given_name : "Incompleto"}</p>
        </div>
      </section>
      <section>
        <FaRegUser className={style.icon} />
        <div>
          <h3>Apellido</h3>
          <p>{loginUser.family_name ? loginUser.family_name : "Incompleto"}</p>
        </div>
      </section>
      <section>
        <MdAlternateEmail className={style.icon} />
        <div>
          <h3>Email</h3>
          <p>{loginUser.email}</p>
        </div>
      </section>
      <section>
        <MdOutlinePlaylistAddCheck className={style.icon} />
        <div>
          <h3>Email Verificado</h3>
          <p>{loginUser.email_verified ? "Si" : "No"}</p>
        </div>
      </section>
    </div>
  );
}

export default Data;
