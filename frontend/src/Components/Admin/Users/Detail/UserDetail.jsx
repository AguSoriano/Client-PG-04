import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import imgCane from "../../../Img/Logo1V2.png";
import {
  cleanUserDetail,
  disableUserById,
  doAdminUserById,
  doUserById,
  eneableUserById,
  getOneUserDetail,
} from "../../../../redux/actions/Users/UsersActions";
import Loading from "../../../Loading/Loading";
import {
  MdArrowBack,
  MdLockOpen,
  MdLockOutline,
  MdOutlinePersonOff,
} from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { Card } from "antd";
import style from "./UserDetail.module.css";

function UserDetail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneUserDetail(id));
    return () => {
      dispatch(cleanUserDetail());
    };
  }, [dispatch, id]);

  const { oneUserDetail } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );
  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  const disableUser = () => {
    dispatch(disableUserById(id, loginUser, true));
    alert(`El usuario ${oneUserDetail.email} fue desabilitado`);
    navigate(-1);
  };

  const eneableUser = () => {
    dispatch(eneableUserById(id, loginUser, false));
    alert(`El usuario ${oneUserDetail.email} fue habilitado`);
    navigate(-1);
  };

  const doAdmin = () => {
    dispatch(doAdminUserById(id, loginUser));
    alert(`El usuario ${oneUserDetail.email} ahora es administrador`);
    navigate(-1);
  };

  const doUser = () => {
    dispatch(doUserById(id, loginUser));
    alert(
      `El usuario ${oneUserDetail.email} ya no es administrador y volvio a ser un usuario`
    );
    navigate(-1);
  };

  return (
    <div>
      {oneUserDetail.email ? (
        <div className={style.mainUser}>
          <MdArrowBack
            onClick={() => navigate(-1)}
            className={style.listName}
          />
          <Card
            title={oneUserDetail.nickname}
            bordered={false}
            style={{
              width: "45rem",
              height: "62rem",
              border: "1px solid grey",
            }}
            cover={
              <img
                src={oneUserDetail.picture ? oneUserDetail.picture : imgCane}
                alt={oneUserDetail.id}
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "44rem",
                  height: "40rem",
                }}
              />
            }
          >
            <p>Nombre: {oneUserDetail.given_name}</p>
            <p>Apellido: {oneUserDetail.family_name}</p>
            <p>Email: {oneUserDetail.email}</p>
            {oneUserDetail.isDisable ? (
              <p>Usuario bloqueado</p>
            ) : (
              <p>
                Privilegio:{" "}
                {oneUserDetail.rol === "user" ? "Usuario" : "Administrador"}
              </p>
            )}
          </Card>
          <TiEdit
            className={style.iconEd}
            onClick={() => navigate(`/admin/users/edit/${id}`)}
          />
          {oneUserDetail.isDisable === "Si" ? (
            <BsPersonCheck
              onClick={() => eneableUser()}
              className={style.iconE}
            />
          ) : (
            <MdOutlinePersonOff
              onClick={() => disableUser()}
              className={style.iconD}
            />
          )}
          {loginUser.rol === "mododios" ? (
            oneUserDetail.rol === "user" ? (
              <MdLockOutline
                onClick={() => doAdmin()}
                className={style.iconAD}
              />
            ) : (
              <MdLockOpen onClick={() => doUser()} className={style.iconAU} />
            )
          ) : (
            <></>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default UserDetail;
