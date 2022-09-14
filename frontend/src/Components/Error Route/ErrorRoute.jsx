import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../Img/NotFound.png";
import style from "./ErrorRoute.module.css";

function ErrorRoute() {
  return (
    <div className={style.errorDiv}>
      <img src={NotFound} alt="Error" />
      <h2>Parece que esta página no existe</h2>
      <Link to="/" className={style.errorLink}>
        Ir al inicio
      </Link>
    </div>
  );
}

export default ErrorRoute;
