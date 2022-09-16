import React, { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../../redux/actions/Categories/CategoryAction";
import Pagination from "../Pagination/PaginationAdmin";
import style from "./Categories.module.css";

function Categories() {
  const dispatch = ReactRedux.useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );

  const categPerPage = categories
    .sort((a, b) => a.id - b.id)
    .slice(page, page + 12);

  return (
    <div>
      <div className={style.categDiv}>
        <Link to={"/admin/categories/newcategory"}>Nueva Categoria</Link>
        <div>
          {categories.length
            ? categPerPage.map((cat) => (
                <Link
                  to={`/admin/categories/detail/${cat.id}`}
                  key={cat.id}
                  className={style.linkCat}
                >
                  <p>{cat.id}</p>
                  <p>{cat.name}</p>
                </Link>
              ))
            : "cargando"}
        </div>
      </div>
      <Pagination setPage={setPage} page={page} products={categories} />
    </div>
  );
}

export default Categories;
