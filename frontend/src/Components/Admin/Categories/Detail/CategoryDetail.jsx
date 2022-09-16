import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  getCategoryDetail,
  cleanCatDetail,
  deleteCategory,
} from "../../../../redux/actions/Categories/CategoryAction";

function CategoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getCategoryDetail(id));
    return () => {
      dispatch(cleanCatDetail());
    };
  }, [dispatch, id]);

  const { categoryDetail } = ReactRedux.useSelector(
    (state) => state.categoryReducer
  );
  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  const deleteCat = () => {
    dispatch(deleteCategory(id, loginUser));
    alert(`La categoria ${categoryDetail.name} se borro correctamente`);
    navigate(-1);
  };

  return (
    <div>
      {categoryDetail.name ? (
        <div>
          <h2>Nombre {categoryDetail.name}</h2>
          <Link to={`/admin/categories/edit/${id}`}>Editame</Link>
          <button onClick={() => deleteCat()}>Borrame</button>
        </div>
      ) : (
        "cargando"
      )}
    </div>
  );
}

export default CategoryDetail;
