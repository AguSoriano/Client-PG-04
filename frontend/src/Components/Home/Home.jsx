import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions/Products/ProductsAction";
import { weekProd as destacados } from "../../redux/actions/WeekProducts/WeekProdAction";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
// import img from "../Img/Logo1V2.png";
import style from "./Home.module.css";
import Loading from "../Loading/Loading";
import Filter from "../Filter/Filter";
import Carousel from "../Carousel/Carousel";

function Home() {
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
      <section>
        {product.length > 1 ? (
          <div className={style.filters}>
            <Filter />
            <Sort setOrder={setOrder} /*setPage={setPage}*/ />
          </div>
        ) : (
          <div></div>
        )}
      </section>

      <section className={style.weekSect}>
        <h1 className={style.Text}>DESTACADO DE LA SEMANA</h1>
        <div className={style.img}>
          {weekProd.length > 1 ? (
            <Carousel
              slides={weekProd.map((prod) => {
                return (
                  <Card
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    img={prod.image /* ? prod.image : img*/}
                    price={prod.price}
                    stock={prod.stock}
                    // shortDesc={prod.shortDescription}
                    widthCard={550}
                    heightCard={475}
                  />
                );
              })}
              controls
              indicators
              width={1200}
              ifCard={true}
            />
          ) : (
            <Loading />
          )}
        </div>
      </section>
      <section className={style.prodSection}>
        {product.length > 1 ? (
          prodPage.map((prod) => (
            <Card
              key={prod.id}
              id={prod.id}
              name={prod.name}
              img={prod.image /* ? prod.image : img*/}
              price={prod.price}
              stock={prod.stock}
              shortDesc={prod.shortDescription}
              widthCard={375}
              heightCard={450}
            />
          ))
        ) : (
          <Loading />
        )}
      </section>
      <section>
        {product.length > 1 ? (
          <Pagination /*setPage={setPage} page={page}*/ products={product} />
        ) : (
          <div></div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
