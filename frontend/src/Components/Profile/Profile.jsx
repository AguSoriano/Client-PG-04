import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiOutlineCreditCard, HiHeart, HiOutlineMap } from "react-icons/hi";
import { GrContact } from "react-icons/gr";

function Profile() {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div className={style.mainRender}>
      {isAuthenticated ? (
        <div className={style.mainProf}>
          <div className={style.user}>
            <img src={user.picture} alt={user.name} />
            <h2>{user.nickname.toUpperCase()}</h2>
            <button onClick={() => logout()}>
              <IoMdLogOut className={style.icon} />
            </button>
          </div>
          <section>
            <CgProfile className={style.icon} />
            <div>
              <Link to="/profile/data" className={style.linkP}>
                Mis datos
              </Link>
              <p>Gestiona tus datos personales</p>
            </div>
          </section>
          <section>
            <HiOutlineCreditCard className={style.icon} />
            <div>
              <Link to="/profile/cards" className={style.linkP}>
                Mis tarjetas
              </Link>
              <p>Gestiona tus tarjetas</p>
            </div>
          </section>
          <section>
            <HiHeart className={style.icon} />
            <div>
              <Link to="/profile/favorite" className={style.linkP}>
                Favoritos
              </Link>
              <p>Gestiona toda tu lista de productos favoritos</p>
            </div>
          </section>
          <section>
            <HiOutlineMap className={style.icon} />
            <div>
              <Link to="/profile/adress" className={style.linkP}>
                Direcciones
              </Link>
              <p>Modifica tus direcciones o agrega una nueva</p>
            </div>
          </section>
          <section>
            <GrContact className={style.icon} />
            <div>
              <Link to="/profile/ask" className={style.linkP}>
                Contactar al administrador
              </Link>
              <p>Realiza consultas al administrador</p>
            </div>
          </section>
          {/* <pre>{JSON.stringify(user)}</pre> */}
        </div>
      ) : (
        "NECESITAS LOGEARTE ANTES DE ACCEDER A ESTA SECCION"
      )}
    </div>
  );
}

export default Profile;
