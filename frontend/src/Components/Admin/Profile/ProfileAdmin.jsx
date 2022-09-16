import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileAdmin.module.css";
import { IoMdLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { MdCategory, MdShoppingCart } from "react-icons/md";
import * as ReactRedux from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import adminpic from "../../Img/adminpicture.png";

function ProfileAdmin() {
  const { logout } = useAuth0();
  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  return (
    <div className={style.mainRender}>
      <div className={style.mainProf}>
        <div className={style.user}>
          <img
            src={loginUser.picture ? loginUser.picture : adminpic}
            alt={loginUser.id}
          />
          <h2>
            {loginUser.nickname.toUpperCase()} {loginUser.rol.toUpperCase()}
          </h2>
          <button onClick={logout}>
            <IoMdLogOut className={style.icon} />
          </button>
        </div>
        <section>
          <GrProductHunt className={style.icon} />
          <div>
            <Link to="/admin/products" className={style.linkP}>
              Productos
            </Link>
            <p>Gestiona todos los productos</p>
          </div>
        </section>
        <section>
          <MdCategory className={style.icon} />
          <div>
            <Link to="/admin/categories" className={style.linkP}>
              Categorias
            </Link>
            <p>Gestiona todas las categorias</p>
          </div>
        </section>
        <section>
          <MdShoppingCart className={style.icon} />
          <div>
            <Link to="/admin/orders" className={style.linkP}>
              Ordenes
            </Link>
            <p>Gestiona todas las ordenes</p>
          </div>
        </section>
        <section>
          <FaUsers className={style.icon} />
          <div>
            <Link to="/admin/users" className={style.linkP}>
              Usuarios
            </Link>
            <p>Gestiona los usuarios registrados</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfileAdmin;
