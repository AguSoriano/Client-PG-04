import React from "react";
import { Link } from "react-router-dom";
import imgFake from "../Img/Logo1V2.png";
import style from "./CardFav.module.css";

function CardFav({ name, id, img, price, shortDesc }) {
  return (
    <Link to={`/products/${id}`} className={style.mainCardFav}>
      <img alt={name} src={img ? img : imgFake} />
      <section>
        <h2>{name}</h2>
        <p>{shortDesc}</p>
        <h3>$ {price}</h3>
      </section>
    </Link>
  );
}

export default CardFav;
