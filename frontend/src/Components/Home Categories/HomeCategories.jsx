import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions/Products/ProductsAction";
import { weekProd as destacados } from "../../redux/actions/WeekProducts/WeekProdAction";
import tarta from "../Img/tarta.jpg";
import vegan from "../Img/vegano1.png";
import kefir from "../Img/kefir.jpg";
import pasta from "../Img/pasta.jpg";
import all from "../Img/all.jpg";
import medallon from "../Img/Medallones.jpg";
import style from "./HomeCategories.module.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import CardCategories from "./CardCategories";
import { Carousel } from "antd";
import CardFav from "../Card/CardFav";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function HomeCategories() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(destacados());
  }, [dispatch]);

  const { product } = ReactRedux.useSelector((state) => state.productsReducer);
  const { weekProd } = ReactRedux.useSelector((state) => state.weekProdReducer);
  const { page } = ReactRedux.useSelector((state) => state.pageReducer);

  const prodPage = product.slice(page, page + 6);

  return (
    <div className={style.main}>
      <section className={style.weekSect}>
        <h1 className={style.Text}>LO MAS DESTACADO</h1>
        {weekProd.length > 1 ? (
          <div className={style.weekProd}>
            <Carousel autoplay>
              {weekProd.map((prod) => (
                <CardFav
                  key={prod.id}
                  name={prod.name}
                  id={prod.id}
                  img={prod.image}
                  price={prod.price}
                  shortDesc={prod.shortDescription}
                  prodDetail={prod}
                />
              ))}
            </Carousel>
          </div>
        ) : (
          <Loading />
        )}
      </section>
      <section className={style.prodSection}>
        <h1 className={style.Text}>CATEGORÍAS</h1>
        <div>
          <CardCategories
            name="Medallones"
            description="Mira toda la variedad de medallones que tenemos disponibles"
            image={medallon}
            value="medallon"
          />
          <CardCategories
            name="Tartas"
            description="Tartas integrales ideales para una vida saludable"
            image={tarta}
            value="tarta"
          />
          <CardCategories
            name="Pastas"
            description="Excelentes pastas para deleitarse y compartir"
            image={pasta}
            value="pasta rellena"
          />
          <CardCategories
            name="Bebidas"
            description="En esta seccion vas a encontrar nuestras bebidas"
            image={kefir}
            value="kefir"
          />
          <CardCategories
            name="Vegano"
            description="En esta seccion encontraras todos los productos veganos"
            image={vegan}
            value="vegano"
          />
          <CardCategories
            name="Todos los productos"
            description="Mira todos los productos que tenemos disponibles en la tienda"
            image={all}
            value="all"
          />
        </div>
      </section>
    </div>
  );
}

export default HomeCategories;
