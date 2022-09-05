import React, { useEffect } from "react";
import * as ReactRedux from "react-redux";
import CardP from "../Card/Card";

function Favorite() {
  const favorites = ReactRedux.useSelector((state) => state.favorites);
  console.log(favorites);

  return (
    <div>
      {favorites?.length
        ? favorites.map((prod) => (
            <CardP
              key={prod.id}
              name={prod.name}
              id={prod.id}
              img={prod.image}
              price={prod.price}
              shortDesc={prod.shortDesc}
            />
          ))
        : "No hay productos en favoritos"}
    </div>
  );
}

export default Favorite;
