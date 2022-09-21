import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  getCategoryDetail,
  cleanCatDetail,
  disableCategory,
  enableCategory,
} from "../../../../redux/actions/Categories/CategoryAction";
import { Card } from "antd";
import style from "./CategoryDetail.module.css";
import { MdArrowBack, MdOutlineRestoreFromTrash } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import Loading from "../../../Loading/Loading";

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
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const disableCat = () => {
    dispatch(disableCategory(id, loginUser));
    alert(`La categoria ${categoryDetail.name} se deshabilito`);
    navigate(-1);
  };
  const enableCat = () => {
    dispatch(enableCategory(id, loginUser));
    alert(`La categoria ${categoryDetail.name} se restauro`);
    navigate(-1);
  };

  return (
    <div>
      {categoryDetail.name ? (
        <div className={style.mainCat}>
          <MdArrowBack
            onClick={() => navigate(-1)}
            className={style.listName}
          />
          <Card
            title={categoryDetail.name}
            bordered={false}
            style={{ width: "50%", border: "1px solid grey", height: "10rem" }}
          >
            Disponible: {categoryDetail.status ? "No" : "Si"}
          </Card>
          <TiEdit
            className={style.iconEd}
            onClick={() => navigate(`/admin/categories/edit/${id}`)}
          />
          {!categoryDetail.status ? (
            <RiDeleteBinLine
              onClick={() => disableCat()}
              className={style.iconD}
            />
          ) : (
            <MdOutlineRestoreFromTrash
              onClick={() => enableCat()}
              className={style.iconE}
            />
          )}
          {/* <h2>Nombre {categoryDetail.name}</h2>
          <Link to={`/admin/categories/edit/${id}`}>Editame</Link>
          <button onClick={() => deleteCat()}>Borrame</button> */}
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
}

export default CategoryDetail;
