import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../../redux/actions/Products/ProductsAction";
import imgCane from "../../Img/Logo1V2.png";
import Loading from "../../Loading/Loading";
import Pagination from "../Pagination/PaginationAdmin";

function Products() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { product } = ReactRedux.useSelector((state) => state.productsReducer);

  const [page, setPage] = useState(0);

  const prodPage = product.slice(page, page + 12);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      <section>
        <Link to={"/admin/products/newproduct"}>Nuevo Producto</Link>
      </section>
      <section
        /*className={style.prodSection}*/ style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "left",
          width: "fit-content",
        }}
      >
        {product.length > 1 ? (
          prodPage.map((prod) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "2.5rem",
                width: "100%",
                gap: "1rem",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              <Link
                to={`/admin/products/detail/${prod.id}`}
                key={prod.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "2rem",
                  width: "100%",
                  gap: "2rem",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {/* id={prod.id} */}
                <img
                  src={prod.image ? prod.image : imgCane}
                  alt={prod.id}
                  style={{ height: "2rem", width: "2rem" }}
                />
                <p>{prod.name}</p>
                <p>$ {prod.price}</p>
                <p>{prod.stock} U</p>
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
      <section>
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
