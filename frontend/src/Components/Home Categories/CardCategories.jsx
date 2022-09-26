import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./CardCategories.module.css";
import { setPageAct } from "../../redux/actions/Page/PageAction";
import * as ReactRedux from "react-redux";

function CardCategories({ name, description, image, value }) {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  const clickMe = () => {
    navigate(`/category/${value}/all`);
    dispatch(setPageAct(0));
    window.scrollTo(0, 0);
  };
  return (
    <div className={style.cardCategory} onClick={() => clickMe()}>
      <img alt={name} src={image} />
      <div>
        <h1 className={style.linkP}>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardCategories;
