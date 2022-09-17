import React from "react";
import * as ReactRedux from "react-redux";
import style from "./Data.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { MdAlternateEmail, MdOutlinePlaylistAddCheck } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Data() {
  const { user } = useAuth0();
  const { loginUser } = ReactRedux.useSelector((state) => state.userLoginReducer);
  return (
    <div className={style.mainData}>
      <div className={style.titleDiv}>
        <h2>Mis datos</h2>
        <Link to={`/profile/data/edit/${loginUser.id}`}>
          <FaUserEdit className={style.linkEdit} />
        </Link>
      </div>
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
          <p className={style.personalData}>
            {loginUser.given_name ? loginUser.given_name : "Incompleto"}
          </p>
        </div>
      </section>
      <section>
        <FaRegUser className={style.icon} />
        <div>
          <h3>Apellido</h3>
          <p className={style.personalData}>
            {loginUser.family_name ? loginUser.family_name : "Incompleto"}
          </p>
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
          <p>{user.email_verified ? "Si" : "No"}</p>
        </div>
      </section>
    </div>
  );
}

export default Data;
