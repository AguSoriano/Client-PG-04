import React from "react";
import { Link } from "react-router-dom";
import imgFake from "../Img/Logo1V2.png";
import style from "./CardFav.module.css";
import * as ReactRedux from "react-redux";
import {
  addFav,
  removeFav,
} from "../../redux/actions/Favorites/FavoritesAction";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

function CardFav({ name, id, img, price, shortDesc, prodDetail }) {
  const dispatch = ReactRedux.useDispatch();
  const { favorites } = ReactRedux.useSelector(
    (state) => state.favoriteReducer
  );
  const addFav1 = () => {
    if (name) {
      dispatch(addFav(prodDetail));
    }
  };

  const removeFav1 = (idp) => {
    if (id) {
      dispatch(removeFav(idp));
    }
  };

  const prodIsFav = (idp) => {
    if (favorites?.length) {
      return favorites.find((prod) => prod.id === idp) ? true : false;
    }
    return false;
  };
  return (
    <div className={style.mainCard}>
      {prodIsFav(id) ? (
        <button onClick={() => removeFav1(id)} className={style.b}>
          <FcLike size="2rem" color="red" border="white" />
        </button>
      ) : (
        <button className={style.b} onClick={addFav1}>
          <AiOutlineHeart size="2rem" color="red" />
        </button>
      )}
      <Link to={`/products/${id}`} className={style.mainCardFav}>
        <img alt={name} src={img ? img : imgFake} />
        <section>
          <h2>{name}</h2>
          <p>{shortDesc}</p>
          <h3>$ {price}</h3>
        </section>
      </Link>
    </div>
  );
}

export default CardFav;
