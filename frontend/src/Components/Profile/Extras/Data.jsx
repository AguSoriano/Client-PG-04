import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Data.module.css";
import { FaRegUser } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { MdAlternateEmail, MdOutlinePlaylistAddCheck } from "react-icons/md";

function Data() {
  const { user } = useAuth0();
  return (
    <div className={style.mainData}>
      <h2>Mis datos</h2>
      <section>
        <RiFileUserLine className={style.icon}/>
        <div>
          <h3>Usuario</h3>
          <p>{user.nickname}</p>
        </div>
      </section>
      <section>
        <FaRegUser className={style.icon}/>
        <div>
          <h3>Nombre</h3>
          <p>{user.given_name}</p>
        </div>
      </section>
      <section>
        <FaRegUser className={style.icon}/>
        <div>
          <h3>Apellido</h3>
          <p>{user.family_name}</p>
        </div>
      </section>
      <section>
        <MdAlternateEmail className={style.icon}/>
        <div>
          <h3>Email</h3>
          <p>{user.email}</p>
        </div>
      </section>
      <section>
        <MdOutlinePlaylistAddCheck className={style.icon}/>
        <div>
          <h3>Verificado</h3>
          <p>{user.email_verified ? "Si" : "No"}</p>
        </div>
      </section>
    </div>
  );
}

export default Data;
