import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileAdmin.module.css";
import { IoMdLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { MdCategory, MdShoppingCart } from "react-icons/md";
// import { HiOutlineCreditCard, HiHeart, HiOutlineMap } from "react-icons/hi";

/*debe contener ademas de las opciones comunes poder crear, editar o borrar:
 - Productos
 - Categorias
 - Usuarios
 - Ordenes
*/

let user = {
  name: "Administrador",
  given_name: "Tu eres",
  family_name: "admin",
  picture:
    "https://www.softzone.es/app/uploads-softzone.es/2021/06/Ejecutar-aplicaciones-como-administrador-al-iniciar-Windows.jpg?x=480&y=375&quality=40",
};
function ProfileAdmin() {
  const logout = () => {
    alert("No te vayas admin");
  };
  return (
    <div className={style.mainRender}>
      <div className={style.mainProf}>
        <div className={style.user}>
          <img src={user.picture} alt={user.name} />
          <h2>
            {user.given_name.toUpperCase()} {user.family_name.toUpperCase()}
          </h2>
          <button onClick={() => logout()}>
            <IoMdLogOut className={style.icon} />
          </button>
        </div>
        <section>
          <FaUsers className={style.icon} />
          <div>
            <Link to="/admin/users" className={style.linkP}>
              Usuarios
            </Link>
            <p>Gestiona los usuarios registrados</p>
          </div>
        </section>
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
        {/* <section>
          <GrContact className={style.icon} />
          <div>
            <Link to="/profile/ask" className={style.linkP}>
              Contactar al administrador
            </Link>
            <p>Realiza consultas al administrador</p>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default ProfileAdmin;
