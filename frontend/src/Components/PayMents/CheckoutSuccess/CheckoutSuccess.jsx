import React from "react";
import styles from "./CheckoutSuccess.module.css";
import pagoexitoso from "../../../imagenes/pagoexitoso.jpg";
import { Link } from "react-router-dom";

export default function AppPago({ userId }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={pagoexitoso} alt="pago exitoso" />
      <h1>Pago Exitosoo</h1>
      <Link className={styles.link} to={"/products/contact"}>
        <button className={styles.button1}> Aceptar </button>
      </Link>
    </div>
  );
}
