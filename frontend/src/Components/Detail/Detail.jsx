import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { useParams } from "react-router-dom";
import {
  cleanDetail,
  getDetail,
} from "../../redux/actions/ProdDetail/ProdDetailAction";
import {
  addFav,
  removeFav,
} from "../../redux/actions/Favorites/FavoritesAction";
import { addToCart } from "../../redux/actions/Cart/CartAction";
import Loading from "../Loading/Loading";
import img from "../Img/PG0.png";
import style from "./Details.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import { Link } from "react-router-dom";



function Detail() {
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();

  // const user = 2;
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail(dispatch));
    };
  }, [dispatch, id]);

  const { prodDetail } = ReactRedux.useSelector(
    (state) => state.prodDetailReducer
  );
  const { favorites } = ReactRedux.useSelector(
    (state) => state.favoriteReducer
  );
  const { cartproduct } = ReactRedux.useSelector((state) => state.cartReducer);

  const addFav1 = () => {
    if (prodDetail.name) {
      dispatch(addFav(prodDetail));
    }
  };

  const removeFav1 = (id) => {
    if (prodDetail.id) {
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
    if (cartproduct?.length) {
      return cartproduct.find((p) => p.id === prodDetail.id) ? true : false;
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
        timer: "2500",
      });
    }
    // dispatch(addToCart(prodDetail, user));
    dispatch(addToCart(prodDetail));
    swal({
      title: "Exito",
      text: `${prodDetail.name} agregado al carrito`,
      icon: "success",
      button: "Aceptar",
      timer: "2500",
    });
  };

  return (
    <div className={style.div}>
      {prodDetail.name ? (
        <div className={style.style}>
          <h1 >{prodDetail.name}</h1>
          

          <img
            alt={prodDetail.name}
            src={prodDetail.image ? prodDetail.image : img}
          />
          
          <p className={style.description}>{prodDetail.longDescription}</p>
          <span className={style.p}>
            {prodDetail.categories.map((cat) => (
              <p  key={cat.id}>{cat.name}</p>
            ))}
            </span>
          

          <section>
            <h3 className={style.stock}>
              Stock disponible:{prodDetail.stock} unidades
            </h3>
          </section>
          <section>
            <h3 className={style.precio}>Precio: ${prodDetail.price}</h3>
          

            {/* <button className={style.button} onClick={addCart}> Agregar al Carro </button> */}
            <Link className={style.link} to={"payment"}>
            <button className={style.button1}> Comprar </button>
            </Link>
          

            {
              <button className={style.button} onClick={addCart}>
                {" "}
                Agregar al Carro{" "}
              </button>
            }
              {!isAuthenticated ? (
              <></>
            ) : prodIsFav(prodDetail.id) ? (
              <button onClick={() => removeFav1(prodDetail.id)}>
                <FcLike size="2rem" color="red"  border="white"/>
              </button>
            ) : (
              <button className={style.b} onClick={addFav1}>
                <AiOutlineHeart size="2rem" color="red"/>
              </button>
            )}
           
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
