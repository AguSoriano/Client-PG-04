import React from "react";
import { Link, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  getCategoryDetail,
  cleanCatDetail,
} from "../../../../redux/actions/Categories/CategoryAction";

function CategoryDetail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getCategoryDetail(id));
    return () => {
      dispatch(cleanCatDetail());
    };
  }, [dispatch]);

  const { categoryDetail } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );

  return <div>{categoryDetail.length ? <div>
    <h2>Nombre {categoryDetail.name}</h2>
   <Link to={`admin/categories/edit/${id}`}>Editame</Link>
  </div> : "cargando"}</div>;
}

export default CategoryDetail;
