import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import imgCane from "../../../Img/Logo1V2.png";
import {
  cleanUserDetail,
  // disableUserById,
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
  // const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  const disableUser = () => {
    // dispatch(disableUserById(id, loginUser, true));
    alert(`El usuario ${oneUserDetail.email} fue desabilitado`);
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
          <button onClick={() => disableUser()}>Desabilitar Usuario</button>
        </div>
      ) : (
        "Cargando"
      )}
    </div>
  );
}

export default UserDetail;
