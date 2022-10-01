import React from "react";
import { useEffect } from "react";
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
import CardCategories from "./CardCategories";
import { Carousel } from "antd";
import CardFav from "../Card/CardFav";
import billetera1 from "../Img/billetera1.jpg";
import billetera2 from "../Img/billetera4.png";
import billetera3 from "../Img/mercadopago2.png";
import billetera5 from "../Img/retiro1.png";
import billetera6 from "../Img/billetera6.jpeg";

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
  const { history } = ReactRedux.useSelector(
    (state) => state.prodDetailReducer
  );

  const prodPage = product.slice(page, page + 6);

  return (
    <div className={style.main}>
      <section>
        <Carousel autoplay>
          <img
            src={billetera1}
            alt="publishing 1"
            className={style.publishing}
          />
          <img
            src={billetera2}
            alt="publishing 2"
            className={style.publishing}
          />
          <img
            src={billetera3}
            alt="publishing 3"
            className={style.publishing}
          />
          <img
            src={billetera5}
            alt="publishing 6"
            className={style.publishing}
          />
          <img
            src={billetera6}
            alt="publishing 5"
            className={style.publishing}
          />
        </Carousel>
      </section>
      {history.length ? (
        <section className={style.weekSect}>
          <h1 className={style.Text}>Basado en tu última visita</h1>
          <div className={style.weekProd}>
            <Carousel autoplay>
              {product
                .filter(
                  (p) => p.categories[0].name === history[0].categories[0].name
                )
                .slice(0, 6)
                .map((prod) => (
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
        </section>
      ) : (
        <></>
      )}
      <section className={style.weekSect}>
        <h1 className={style.Text}>Lo mas destacado</h1>
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
        <h1 className={style.Text}>Categorias</h1>
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
