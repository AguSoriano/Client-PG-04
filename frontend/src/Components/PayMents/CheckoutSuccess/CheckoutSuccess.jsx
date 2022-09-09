import React from "react";
import styles from "./CheckoutSuccess.module.css";
import pagoexitoso from "../../../imagenes/pagoexitoso.jpg"

export default function AppPago({ userId }) {
  return (
  <div className={styles.container}>
    <img className={styles.img}  src={pagoexitoso} alt="pago exitoso" />
    <h1>Pago Exitoso</h1>
  </div>
)}
