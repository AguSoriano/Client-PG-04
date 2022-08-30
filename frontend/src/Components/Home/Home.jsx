import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
import img from "../Img/PG0.png";
import style from "./Home.module.css";
import Loading from "../Loading/Loading";

function Home() {
  const dispatch = ReactRedux.useDispatch();
  const [order, setOrder] = useState("");
  // const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = ReactRedux.useSelector((state) => state.product);
  const page = ReactRedux.useSelector((state) => state.page);

  const prodPage = products.slice(page, page + 6);

  return (
    <div className={style.main}>
      <section>
        {products.length > 1 ? (
          <Sort setOrder={setOrder} /*setPage={setPage}*/ />
        ) : (
          <div></div>
        )}
      </section>

      <section className={style.prodSection}>
        {products.length > 1 ? (
          prodPage.map((prod) => (
            <Card
              key={prod.id}
              id={prod.id}
              name={prod.name}
              img={prod.image ? prod.image : img}
              price={prod.price}
              stock={prod.stock}
              shortDesc={prod.shortDescription}
            />
          ))
        ) : (
          <Loading />
        )}
      </section>
      <section>
        {products.length > 1 ? (
          <Pagination /*setPage={setPage} page={page}*/ products={products} />
        ) : (
          <div></div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
