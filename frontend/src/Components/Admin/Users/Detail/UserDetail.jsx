import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const { loginUser } = ReactRedux.useSelector((state) => state.userLoginReducer);

  const disableUser = () => {
    dispatch(disableUserById(id, loginUser, true));
    alert(`El usuario ${oneUserDetail.email} fue desabilitado`);
    navigate("/admin/users");
  };

  const eneableUser = () => {
    dispatch(eneableUserById(id, loginUser, false));
    alert(`El usuario ${oneUserDetail.email} fue habilitado`);
    navigate("/admin/users");
  };

  const doAdmin = () => {
    dispatch(doAdminUserById(id, loginUser));
    alert(`El usuario ${oneUserDetail.email} ahora es administrador`);
    navigate("/admin/users");
  };

  const doUser = () => {
    dispatch(doUserById(id, loginUser));
    alert(
      `El usuario ${oneUserDetail.email} ya no es administrador y volvio a ser un usuario`
    );
    navigate("/admin/users");
  };

  return (
    <div>
      {oneUserDetail.email ? (
        <div>
          <h1>{oneUserDetail.email}</h1>
          <img
            src={oneUserDetail.picture ? oneUserDetail.picture : imgCane}
            alt={oneUserDetail.id}
          />
          <Link to={`/admin/users/edit/${id}`}>Editar</Link>
          {oneUserDetail.rol === "user" ? (
            <button onClick={() => doAdmin()}>Hacer Admin</button>
          ) : (
            <button onClick={() => doUser()}>Sacar Admin</button>
          )}
          {oneUserDetail.isDisable ? (
            <button onClick={() => eneableUser()}>Habilitar Usuario</button>
          ) : (
            <button onClick={() => disableUser()}>Desabilitar Usuario</button>
          )}
        </div>
      ) : (
        "Cargando"
      )}
    </div>
  );
}

export default UserDetail;
