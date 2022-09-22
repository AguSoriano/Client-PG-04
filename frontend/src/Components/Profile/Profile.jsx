import React from "react";
import * as ReactRedux from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import { IoMdLogOut } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineCreditCard, HiOutlineMap } from "react-icons/hi";
import { GrContact, GrDatabase } from "react-icons/gr";
import { FcTodoList } from "react-icons/fc";
import { TbFaceIdError, TbWritingSign } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";

function Profile() {
  const { logout } = useAuth0();
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  return (
    <div className={style.mainRender}>
      {loginUser.email ? (
        <div className={style.mainProf}>
          <div className={style.user}>
            <img src={loginUser.picture} alt={loginUser.id} />
            <h2>{loginUser.nickname.toUpperCase()}</h2>
            <button onClick={() => logout()}>
              <IoMdLogOut className={style.icon} />
            </button>
          </div>
          <div className={style.optionsDiv}>
            <section>
              {loginUser.rol === "user" ? (
                <>
                  <CgProfile className={style.icon} />
                  <div>
                    <Link to="/profile/data" className={style.linkP}>
                      Mis datos
                    </Link>
                    <p>Gestiona tus datos personales</p>
                  </div>
                </>
              ) : (
                <>
                  <GrDatabase className={style.icon} />
                  <div>
                    <Link to="/profile/data" className={style.linkP}>
                      Datos personales
                    </Link>
                    <p>Podras ver y administrar todos tus datos personales</p>
                  </div>
                </>
              )}
            </section>
            <section>
              {loginUser.rol === "user" ? (
                <>
                  <HiOutlineCreditCard className={style.icon} />
                  <div>
                    <Link to="/profile/cards" className={style.linkP}>
                      Mis tarjetas
                    </Link>
                    <p>Gestiona tus tarjetas</p>
                  </div>
                </>
              ) : (
                <>
                  <FcTodoList className={style.icon} />
                  <div>
                    <Link to="/profile/admin/todo" className={style.linkP}>
                      Lista de Tareas
                    </Link>
                    <p>Podras ver todas las tareas por realizar</p>
                  </div>
                </>
              )}
            </section>
            <section>
              {loginUser.rol === "user" ? (
                <>
                  <IoBagHandleOutline className={style.icon} />
                  <div>
                    <Link to="/profile/historyorders" className={style.linkP}>
                      Mis Compras
                    </Link>
                    <p>Consulta todas tus compras</p>
                  </div>
                </>
              ) : (
                <>
                  <TbWritingSign className={style.icon} />
                  <div>
                    <Link to="/profile/admin/comments" className={style.linkP}>
                      Comentarios
                    </Link>
                    <p>Deja comentarios acerca de mejoras y/o optimizaciones</p>
                  </div>
                </>
              )}
            </section>
            <section>
              {loginUser.rol === "user" ? (
                <>
                  <HiOutlineMap className={style.icon} />
                  <div>
                    <Link to="/profile/adress" className={style.linkP}>
                      Direcciones
                    </Link>
                    <p>Modifica tus direcciones o agrega una nueva</p>
                  </div>
                </>
              ) : (
                <>
                  <TbFaceIdError className={style.icon} />
                  <div>
                    <Link to="/profile/admin/reportbug" className={style.linkP}>
                      Bugs
                    </Link>
                    <p>Reporta al creador sobre los bugs que aparecen</p>
                  </div>
                </>
              )}
            </section>
            <section>
              {loginUser.rol === "user" ? (
                <>
                  <GrContact className={style.icon} />
                  <div>
                    <Link to="/profile/ask" className={style.linkP}>
                      Contactar al administrador
                    </Link>
                    <p>Realiza consultas al administrador</p>
                  </div>
                </>
              ) : (
                <>
                  <RiMailSendLine className={style.icon} />
                  <div>
                    <Link
                      to="/profile/admin/contactowner"
                      className={style.linkP}
                    >
                      Contactar al creador
                    </Link>
                    <p>Realiza consultas al creador de la pagina</p>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      ) : (
        "NECESITAS LOGEARTE ANTES DE ACCEDER A ESTA SECCION"
      )}
    </div>
  );
}

export default Profile;
