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
import swal from "sweetalert";
import PaymentCreate from "../PayMents/PaymentCreate/PaymentCreate"
import { Link } from "react-router-dom";



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

  const addFav1 = () => {
    if (product.name) {
      dispatch(addFav(product));
    }
  };

  const removeFav1 = (id) => {
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
      return swal({
        title: "Cuidado",
        text: "El producto ya esta en el carrito",
        icon: "error",
        button: "Aceptar",
        timer: "2500"
      });
    }
    dispatch(addToCart(product));
    swal({
      title: "Exito",
      text: `${product.name} agregado al carrito`,
      icon: "success",
      button: "Aceptar",
      timer: "2500"
    });
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
            <p className={style.details}>{product.longDescription}</p>
            {product.categories.map((cat) => (
              <p key={cat.id}>{cat.name}</p>
            ))}
          </div>

          <section>

            <h3 className={style.stock}>Stock disponible:{product.stock} unidades</h3>
          </section>
          <section>

            <h3 className={style.precio}>Precio: ${product.price}</h3>
            {!isAuthenticated ? (
              <></>
            ) : prodIsFav(product.id) ? (
              <button onClick={() => removeFav1(product.id)}>
                <FcLike />
              </button>
            ) : (
              <button className={style.button2} onClick={addFav1}>
                <AiOutlineHeart />
              </button>
            )}
            <button className={style.button} onClick={addCart}> Agregar al Carro </button>
            <Link className={style.link} to={"payment"}>
              Comprar
            </Link>
            {/* <button className={style.button1}> Comprar </button> */}
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
