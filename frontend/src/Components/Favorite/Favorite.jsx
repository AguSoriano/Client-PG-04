import React /*useEffect*/ from "react";
import * as ReactRedux from "react-redux";
import CardFav from "../Card/CardFav";
import style from "./Favorite.module.css";

function Favorite() {
  const { favorites } = ReactRedux.useSelector(
    (state) => state.favoriteReducer
  );
  console.log(favorites);

  return (
    <div className={style.mainFav}>
      <h2>Favoritos 💖</h2>
      {favorites?.length ? (
        favorites.map((prod) => (
          <CardFav
            key={prod.id}
            name={prod.name}
            id={prod.id}
            img={prod.image}
            price={prod.price}
            shortDesc={prod.shortDescription}
            prodDetail={prod}
          />
        ))
      ) : (
        <h2>No hay ningun producto en favoritos 💔💔</h2>
      )}
    </div>
  );
}

export default Favorite;
