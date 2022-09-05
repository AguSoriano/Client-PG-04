import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { useParams } from "react-router-dom";
import {
  addFav,
  addToCart,
  cleanDetail,
  getDetail,
  removeFav,
} from "../../redux/actions";
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
  const cart = ReactRedux.useSelector((state) => state.cartproduct);

  const addFav = () => {
    if (product.name) {
      dispatch(addFav(product));
    }
  };

  const removeFav = (id) => {
    if (product.id) {
      dispatch(removeFav(id));
    }
  };

  const prodIsFav = (id) => {
    if (favorites?.length) {
      return favorites.find((prod) => prod.id === id) ? true : false;
    }
    return false;
  };

  const isOnCart = () => {
    if (cart?.length) {
      return cart.find((p) => p.id === product.id) ? true : false;
    }
    return false;
  };

  const addCart = () => {
    if (isOnCart()) {
      return alert("El producto ya esta en el carrito");
    }
    dispatch(addToCart(product));
    alert(`${product.name} agregado al carrito`);
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
          />
          <div className={style.details}>
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
              <button onClick={() => removeFav(product.id)}>
                <FcLike />
              </button>
            ) : (
              <button onClick={addFav}>
                <AiOutlineHeart />
              </button>
            )}
            <button onClick={addCart}> Agregar al Carro </button>
            <button> Comprar </button>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
