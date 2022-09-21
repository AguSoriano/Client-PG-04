import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  cleanDetail,
  getDetail,
} from "../../../../redux/actions/ProdDetail/ProdDetailAction";
import * as ReactRedux from "react-redux";
import style from "./ProductDetail.module.css";
import {
  deleteProduct,
  eneableProduct,
} from "../../../../redux/actions/Products/ProductsAction";
import Loading from "../../../Loading/Loading";
import { Card } from "antd";
import { MdArrowBack, MdOutlineRestoreFromTrash } from "react-icons/md";
import imgDefault from "../../../Img/Logo1V2.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

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
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const deleteProd = () => {
    dispatch(deleteProduct(id, loginUser));
    alert(`El producto ${prodDetail.name} fue desactivado`);
    navigate(-1);
  };
  const eneableProd = () => {
    dispatch(eneableProduct(id, loginUser));
    alert(`El producto ${prodDetail.name} fue restaurado`);
    navigate(-1);
  };

  return (
    <div>
      {prodDetail.name ? (
        <div className={style.mainD}>
          <MdArrowBack
            onClick={() => navigate(-1)}
            className={style.listName}
          />
          <Card
            title={prodDetail.name}
            bordered={false}
            style={{
              width: "42rem",
              height: "50rem",
              border: "1px solid grey",
            }}
            cover={
              <img
                src={prodDetail.image ? prodDetail.image : imgDefault}
                alt={prodDetail.id}
                style={{
                  width: "42rem",
                  height: "27.8rem",
                }}
              />
            }
          >
            <p>{prodDetail.shortDescription}</p>
            <p>Descripcion: {prodDetail.longDescription}</p>
            {prodDetail.status ? (
              <p>No disponible</p>
            ) : (
              <p>
                ${prodDetail.price} la unidad -{" "}
                {prodDetail.stock > 0
                  ? `${prodDetail.stock} unidades disponibles`
                  : "Sin stock"}
              </p>
            )}
          </Card>
          <TiEdit
            className={style.iconEd}
            onClick={() => navigate(`/admin/products/edit/${id}`)}
          />
          {prodDetail.status ? (
            <MdOutlineRestoreFromTrash
              onClick={() => eneableProd()}
              className={style.iconE}
            />
          ) : (
            <RiDeleteBinLine
              onClick={() => deleteProd()}
              className={style.iconD}
            />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductDetail;
