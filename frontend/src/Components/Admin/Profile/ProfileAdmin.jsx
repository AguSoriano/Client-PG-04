import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileAdmin.module.css";
import * as ReactRedux from "react-redux";
import usersImg from "../../Img/usersImg.png";
import ordersImg from "../../Img/ordersImg.png";
import productsImg from "../../Img/productsImg.jpg";
import categoriesImg from "../../Img/categoriesImg.jpg";
import thinking from "../../Img/thinking.png";

function ProfileAdmin() {
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  return (
    <div className={style.mainRender}>
      <div className={style.thinking}>
        <h1>¿Sobre que te gustaria trabajar {loginUser.nickname}?</h1>
        <img alt="?" src={thinking} />
      </div>
      <div className={style.mainProf}>
        <div className={style.prodAndCat}>
          <Link to="/admin/products" className={style.sectionAdm}>
            <img alt="products" src={productsImg} />
            <div>
              <h2 className={style.linkP}>Productos</h2>
              <p>Gestiona los productos, crea o edita</p>
            </div>
          </Link>
          <Link to="/admin/categories" className={style.sectionAdm}>
            <img alt="categories" src={categoriesImg} />
            <div>
              <h2 className={style.linkP}>Categorías</h2>
              <p>Gestiona las categorias, crea o edita</p>
            </div>
          </Link>
        </div>
        <div className={style.ordAndUser}>
          <Link to="/admin/orders" className={style.sectionAdm}>
            <img alt="orders" src={ordersImg} />
            <div>
              <h2 className={style.linkP}>Ordenes</h2>
              <p>Gestiona las ordenes de compra</p>
            </div>
          </Link>
          <Link to="/admin/users" className={style.sectionAdm}>
            <img alt="users" src={usersImg} />
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
