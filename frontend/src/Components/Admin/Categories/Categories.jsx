import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../../redux/actions/Categories/CategoryAction";

function Categories() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );

  return (
    <div>
      {categories.length
        ? categories.map((cat) => (
            <Link to={`/admin/categories/detail/${cat.id}`} key={cat.id}>
              {cat.name}
            </Link>
          ))
        : "cargando"}
    </div>
  );
}

export default Categories;
