import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../../redux/actions/Products/ProductsAction";
import imgCane from "../../Img/Logo1V2.png";
import Loading from "../../Loading/Loading";
import Pagination from "../Pagination/PaginationAdmin";
import style from "./Products.module.css";

function Products() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { product } = ReactRedux.useSelector((state) => state.productsReducer);

  const [page, setPage] = useState(0);

  const prodPage = product.slice(page, page + 12);

  return (
    <div className={style.mainProdDiv}>
      <section className={style.newProd}>
        <Link to={"/admin/products/newproduct"} className={style.linkNewP}>
          Añadir  Nuevo Producto
        </Link>
      </section>
      <div><h2>Lista de Productos</h2></div>
      <section className={style.prodSection}>
        <div className={style.prodRender}>
          <div className={style.linkProd}>
            <p>ID</p>
            <span className={style.linkPName}>Nombre del producto</span>
            <p>Precio</p>
            <p>Stock</p>
            <p>Estado</p>
          </div>
        </div>
        {product.length > 1 ? (
          prodPage.map((prod) => (
            <div className={style.prodRender}>
              <Link
                to={`/admin/products/detail/${prod.id}`}
                key={prod.id}
                className={style.linkProd}
              >
                <p>{prod.id}</p>
                {/* <img src={prod.image ? prod.image : imgCane} alt={prod.id} /> */}
                <span className={style.linkPName}>{prod.name}</span>
                <p>$ {prod.price}</p>
                <p>{prod.stock} U</p>
                <p>{prod.status ? "No disp." : "Disp."}</p>
                {/* shortDesc={prod.shortDescription}
              widthCard={375}
            heightCard={450} */}
              </Link>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </section>
      <section className={style.pag}>
        {product.length > 1 ? (
          <Pagination setPage={setPage} page={page} products={product} />
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}

export default Products;
