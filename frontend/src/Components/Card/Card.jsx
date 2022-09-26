import React from "react";
import { Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import imgFake from "../Img/Logo1V2.png";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import {
  addFav,
  removeFav,
} from "../../redux/actions/Favorites/FavoritesAction";
import * as ReactRedux from "react-redux";
import style from "./Card.module.css";

const { Meta } = Card;

function CardP({
  name,
  prodDetail,
  id,
  img,
  price,
  shortDesc,
  widthCard,
  heightCard,
}) {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();
  let newP = `$ ${price}`;

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

  const goTo = () => {
    navigate(`/products/${id}`);
    window.scrollTo(0, 0);
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
      <div onClick={() => goTo()}>
        <Card
          hoverable
          style={{ width: widthCard, height: heightCard }}
          cover={
            <img
              alt={name}
              src={img ? img : imgFake}
              style={{ width: widthCard, height: "255px" }}
            />
          }
        >
          <Meta
            title={newP}
            description={shortDesc}
            style={{
              justifyContent: "center",
              marginTop: "2rem",
              textTransform: "capitalize",
            }}
          />
        </Card>
      </div>
    </div>
  );
}

export default CardP;
