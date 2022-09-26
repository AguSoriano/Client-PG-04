import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions/Products/ProductsAction";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
import style from "./Home.module.css";
import { useParams } from "react-router-dom";
import Filter from "../Filter/Filter";

function HomeFilters() {
  const { value, subvalue } = useParams();
  const dispatch = ReactRedux.useDispatch();
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { product } = ReactRedux.useSelector((state) => state.productsReducer);
  const prodFilter =
    value === "all"
      ? product
      : value === "medallon"
      ? subvalue === "all"
        ? product.filter((prod) =>
            prod.categories.some((cat) => cat.name === "medallon")
          )
        : product
            .filter((prod) =>
              prod.categories.some((cat) => cat.name === "medallon")
            )
            .filter((prod) =>
              prod.categories.some((cat) => cat.name === subvalue)
            )
      : product.filter((prod) =>
          prod.categories.some((cat) => cat.name === value)
        );

  const { page } = ReactRedux.useSelector((state) => state.pageReducer);

  const prodPage = prodFilter.slice(page, page + 6);

  return (
    <div className={style.main}>
      <section>
        {prodFilter.length > 1 ? (
          <div className={style.filters}>
            <Filter filtro={value} />
            <Sort setOrder={setOrder} />
          </div>
        ) : (
          <div></div>
        )}
      </section>
      <section className={style.prodSection}>
        <h1 className={style.Text}>PRODUCTOS</h1>
        <div className={style.prod}>
          {prodFilter.length > 1 &&
            prodPage.map((prod) => (
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
      </section>
      <section>
        {prodFilter.length > 1 ? (
          <Pagination products={prodFilter} />
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}

export default HomeFilters;
