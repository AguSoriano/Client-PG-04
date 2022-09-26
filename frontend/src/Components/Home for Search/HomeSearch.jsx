import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import * as ReactRedux from "react-redux";
import { clearSearch } from "../../redux/actions/Products/ProductsAction";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
import style from "./Home.module.css";
import Loading from "../Loading/Loading";

function HomeSearch() {
  const dispatch = ReactRedux.useDispatch();
  const [order, setOrder] = useState("");

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  const { search } = ReactRedux.useSelector((state) => state.productsReducer);
  const { page } = ReactRedux.useSelector((state) => state.pageReducer);

  const prodPage = search.filter((p) => !p.status).slice(page, page + 6);

  return (
    <div className={style.main}>
      <section>
        {search.length > 1 ? (
          <div className={style.filters}>
            <Sort setOrder={setOrder} />
          </div>
        ) : (
          <div></div>
        )}
      </section>
      <section className={style.prodSection}>
        <h1 className={style.Text}>PRODUCTOS</h1>
        {search.length > 1 ? (
          <div className={style.prod}>
            {prodPage.map((prod) => (
              <Card
                key={prod.id}
                id={prod.id}
                name={prod.name}
                img={prod.image}
                price={prod.price}
                stock={prod.stock}
                shortDesc={prod.shortDescription}
                widthCard={375}
                heightCard={450}
                prodDetail={prod}
              />
            ))}
          </div>
        ) : (
          <h2>No se encontraron resultados 😞</h2>
        )}
      </section>
      <section>
        {search.length > 1 ? <Pagination products={search} /> : <div></div>}
      </section>
    </div>
  );
}

export default HomeSearch;
