import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions/Users/UsersActions";
import imgCane from "../../Img/Logo1V2.png";
import Loading from "../../Loading/Loading";
import Pagination from "../Pagination/PaginationAdmin";

function Users() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { allUsersOnDb } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );

  const [page, setPage] = useState(0);

  const usersPerPage = allUsersOnDb.slice(page, page + 12);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "left",
          width: "fit-content",
        }}
      >
        {allUsersOnDb.length > 1 ? (
          usersPerPage.map((us) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "2.5rem",
                width: "100%",
                gap: "1rem",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
              key={us.id}
            >
              <Link
                to={`/admin/users/detail/${us.id}`}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "2rem",
                  width: "100%",
                  gap: "2rem",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <img
                  src={us.picture ? us.picture : imgCane}
                  alt={us.id}
                  style={{ height: "2rem", width: "2rem" }}
                />
                <p
                  style={{ textAlign: "left", height: "2rem", width: "20rem" }}
                >
                  {us.email}
                </p>
                <p
                  style={{ textAlign: "left", height: "2rem", width: "20rem" }}
                >
                  {us.nickname}
                </p>
                <p style={{ textAlign: "left", height: "2rem", width: "8rem" }}>{us.isDisable ? "Desabilitado" : "Activo"}</p>
                <p>{us.rol}</p>
              </Link>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </section>
      <section>
        {allUsersOnDb.length > 1 ? (
          <Pagination setPage={setPage} page={page} products={allUsersOnDb} />
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
}

export default Users;
