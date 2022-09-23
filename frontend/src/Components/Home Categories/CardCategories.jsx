import React from "react";
import { Link } from "react-router-dom";
import style from "./CardCategories.module.css";

function CardCategories({ name, description, image, value }) {
  return (
    <Link to="/homecategories" className={style.cardCategory}>
      <img alt={name} src={image} />
      <div>
        <h1 className={style.linkP}>{name}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CardCategories;
