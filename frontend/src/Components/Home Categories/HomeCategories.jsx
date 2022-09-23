import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions/Products/ProductsAction";
import { weekProd as destacados } from "../../redux/actions/WeekProducts/WeekProdAction";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
import img from "../Img/Logo1V2.png";
import style from "./HomeCategories.module.css";
import Loading from "../Loading/Loading";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import CardCategories from "./CardCategories";
// import Carousel from "../Carousel/Carousel";

function HomeCategories() {
  const dispatch = ReactRedux.useDispatch();
  const [order, setOrder] = useState("");
  // const [page, setPage] = useState(0);

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
        <div className={style.weekProd}>
          {weekProd.length > 1 ? (
            weekProd
              .filter((p) => !p.status)
              .map((prod) => (
                <Link
                  to={`/products/${prod.id}`}
                  key={prod.id}
                  className={style.weekCard}
                >
                  <img src={prod.image} alt={prod.name} />
                  <p>${prod.price}</p>
                </Link>
              ))
          ) : (
            <Loading />
          )}
        </div>
      </section>
      <section className={style.prodSection}>
        <h1 className={style.Text}>CATEGORÍAS</h1>
        <div>
          <CardCategories
            name="Medallones"
            description="Aca van los medallones"
            image={img}
            value="medallon"
          />
          <CardCategories
            name="Tartas"
            description="Aca van las tartas"
            image={img}
            value="tarta"
          />
          <CardCategories
            name="Pastas"
            description="Aca van los pastas"
            image={img}
            value="pasta rellena"
          />
          <CardCategories
            name="Bebidas"
            description="Aca van las bebidas"
            image={img}
            value="bebida"
          />
          <CardCategories
            name="Vegano"
            description="Aca van los productos veganos"
            image={img}
            value="vegano"
          />
          <CardCategories
            name="Todos los productos"
            description="Aca se muestra todo"
            image={img}
            value="all"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomeCategories;
