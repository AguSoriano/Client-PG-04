import React from "react";
import style from "./Tarifas.module.css";

function Tarifas() {
  return (
    <div className={style.mainTarifa}>
      <div>
        <h2>π° Costos de entrega π°</h2>
        <p>La compra no posee ningun costo de entrega!π</p>
        <p>
          Siempre que el cliente decida retirar sus productos en el local π€
        </p>
      </div>
      <div>
        <h2>π° Costos de envio π°</h2>
        <p>El costo de envio minimo es de $150 πΈ</p>
        <p>puede variar deacuerdo a la distancia a recorrer π΅...</p>
      </div>
      <p>Disculpe las molestias π©π½βπ³... Β©CANEFOOD</p>
    </div>
  );
}

export default Tarifas;
