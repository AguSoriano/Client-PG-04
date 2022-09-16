import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  cleanDetail,
  getDetail,
} from "../../../../redux/actions/ProdDetail/ProdDetailAction";
import * as ReactRedux from "react-redux";
// import style from "./ProductDetail.module.css";
import { deleteProduct } from "../../../../redux/actions/Products/ProductsAction";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const { prodDetail } = ReactRedux.useSelector(
    (state) => state.prodDetailReducer
  );
  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  const deleteProd = () => {
    dispatch(deleteProduct(id, loginUser));
    alert(`El producto ${prodDetail.name} fue borrado`);
    navigate(-1);
  };

  return (
    <div>
      {prodDetail.name ? (
        <div>
          <h1>{prodDetail.name}</h1>
          <img src={prodDetail.image} alt={prodDetail.id} />
          <Link to={`/admin/products/edit/${id}`}>Editar</Link>
          <button onClick={() => deleteProd()}>Borrar</button>
        </div>
      ) : (
        "Cargando"
      )}
    </div>
  );
}

export default ProductDetail;
