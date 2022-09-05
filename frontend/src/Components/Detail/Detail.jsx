import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { useParams } from "react-router-dom";
import { addFav, cleanDetail, getDetail, removeFav } from "../../redux/actions";
import Loading from "../Loading/Loading";
import img from "../Img/PG0.png";
import style from "./Details.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Detail() {
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail(dispatch));
    };
  }, [dispatch, id]);

  const product = ReactRedux.useSelector((state) => state.prodDetail);
  const favorites = ReactRedux.useSelector((state) => state.favorites);

  const add = () => {
    dispatch(addFav(product));
  };

  const remove = (id) => {
    dispatch(removeFav(id));
  };

  const prodIsFav = (id) => {
    if (favorites?.length) {
      return favorites.find((prod) => prod.id === id) ? true : false;
    }
    return false;
  };

  return (
    <div>
      {product.name ? (
        <div className={style.style}>
          <h1 className={style.title}>{product.name}</h1>
          <img
            className={style.img}
            alt={product.name}
            src={product.image ? product.image : img}
            // style={{ width: 450, height: 450 }}
          />
          <div
            className={style.details}
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   gap: "2rem",
            // }}
          >
            {product.categories.map((cat) => (
              <p key={cat.id}>{cat.name}</p>
            ))}
          </div>
          <p className={style.details}>{product.longDescription}</p>
          <section>
            <p className={style.stock}>Stock disponible</p>
            <h3 className={style.stock}>{product.stock} unidades</h3>
          </section>
          <section>
            <p className={style.precio}>Precio</p>
            <h3 className={style.precio}>${product.price}</h3>
            {!isAuthenticated ? (
              <></>
            ) : prodIsFav(product.id) ? (
              <button onClick={() => remove(product.id)}>
                <FcLike />
              </button>
            ) : (
              <button onClick={add}>
                <AiOutlineHeart />
              </button>
            )}

            {/* <button onClick={remove}>Sacar Fav</button> */}
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
