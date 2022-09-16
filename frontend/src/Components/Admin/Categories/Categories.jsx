import React, { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../../redux/actions/Categories/CategoryAction";
import Pagination from "../Pagination/PaginationAdmin";

function Categories() {
  const dispatch = ReactRedux.useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );

  const categPerPage = categories.slice(page, page + 12);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link to={"/admin/categories/newcategory"}>Nueva Categoria</Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {categories.length
            ? categPerPage.map((cat) => (
                <Link to={`/admin/categories/detail/${cat.id}`} key={cat.id}>
                  {cat.name}
                </Link>
              ))
            : "cargando"}
        </div>
        <Pagination setPage={setPage} page={page} products={categories} />
      </div>
    </div>
  );
}

export default Categories;
