import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileAdmin.module.css";
// import { IoMdLogOut } from "react-icons/io";
// import { FaUsers } from "react-icons/fa";
// import { GrProductHunt } from "react-icons/gr";
// import { MdCategory, MdShoppingCart } from "react-icons/md";
// import * as ReactRedux from "react-redux";
// import { useAuth0 } from "@auth0/auth0-react";
// import adminpic from "../../Img/adminpicture.png";
import usersImg from "../../Img/usersImg.png";
import ordersImg from "../../Img/ordersImg.png";
import productsImg from "../../Img/productsImg.jpg";
import categoriesImg from "../../Img/categoriesImg.jpg";
import thinking from "../../Img/thinking.png";

function ProfileAdmin() {
  // const { logout } = useAuth0();
  // const { loginUser } = ReactRedux.useSelector(
  //   (state) => state.userLoginReducer
  // );

  return (
    <div className={style.mainRender}>
      {/* <div className={style.user}>
        <img
          src={loginUser.picture ? loginUser.picture : adminpic}
          alt={loginUser.id}
        />
        <h2>BIENVENIDO ADMINISTRADOR "{loginUser.given_name.toUpperCase()}"</h2>
        <button onClick={logout}>
          <IoMdLogOut className={style.icon} />
        </button>
      </div> */}
      <div className={style.thinking}>
        <h1>¿Sobre que le gustaria trabajar?</h1>
        <img alt="?" src={thinking} />
      </div>
      <div className={style.mainProf}>
        <div className={style.prodAndCat}>
          <Link to="/admin/products" className={style.sectionAdm}>
            <img alt="products" src={productsImg} />
            {/* <GrProductHunt className={style.icon} /> */}
            <div>
              <h2 className={style.linkP}>Productos</h2>
              <p>Gestiona los productos, crea o edita</p>
            </div>
          </Link>
          <Link to="/admin/categories" className={style.sectionAdm}>
            <img alt="categories" src={categoriesImg} />
            {/* <MdCategory className={style.icon} /> */}
            <div>
              <h2 className={style.linkP}>Categorías</h2>
              <p>Gestiona las categorias, crea o edita</p>
            </div>
          </Link>
        </div>
        <div className={style.ordAndUser}>
          <Link to="/admin/orders" className={style.sectionAdm}>
            <img alt="orders" src={ordersImg} />
            {/* <MdShoppingCart className={style.icon} /> */}
            <div>
              <h2 className={style.linkP}>Ordenes</h2>
              <p>Gestiona las ordenes de compra</p>
            </div>
          </Link>
          <Link to="/admin/users" className={style.sectionAdm}>
            <img alt="users" src={usersImg} />
            {/* <FaUsers className={style.icon} /> */}
            <div>
              <h2 className={style.linkP}>Usuarios</h2>
              <p>Gestiona los usuarios registrados</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileAdmin;
