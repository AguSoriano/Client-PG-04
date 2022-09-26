import React from "react";
import style from "./Tarifas.module.css";

function Tarifas() {
  return (
    <div className={style.mainTarifa}>
      <div>
        <h2>💰 Costos de entrega 💰</h2>
        <p>La compra no posee ningun costo de entrega!🙀</p>
        <p>
          Siempre que el cliente decida retirar sus productos en el local 🏤
        </p>
      </div>
      <div>
        <h2>💰 Costos de envio 💰</h2>
        <p>El costo de envio minimo es de $150 😸</p>
        <p>puede variar deacuerdo a la distancia a recorrer 🛵...</p>
      </div>
      <p>Disculpe las molestias 👩🏽‍🍳... ©CANEFOOD</p>
    </div>
  );
}

export default Tarifas;
