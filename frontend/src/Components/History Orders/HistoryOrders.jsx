import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { getUserOrders } from "../../redux/actions/Users/UsersActions";
import { Avatar, List } from "antd";
import defaultCane from "../Img/Logo1V2.png";
import style from "./HistoryOrders.module.css";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function HistoryOrders() {
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getUserOrders(loginUser));
  }, [dispatch, loginUser]);

  const { oneUserOrders } = ReactRedux.useSelector(
    (state) => state.usersReducer
  );

  const data = oneUserOrders.filter((ord) => ord.status !== "carrito");

  return (
    <div className={style.listDiv}>
      <div className={style.list}>
        <h2>Mis Compras</h2>
        <MdArrowBack onClick={() => navigate(-1)} className={style.listName} />
      </div>
      {oneUserOrders.length ? (
        <List
          size="large"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      item.products[0]?.image
                        ? item.products[0].image
                        : defaultCane
                    }
                  />
                }
                title={
                  <Link to={`/profile/historyorders/detail/${item.id}`}>
                    {item.createdAt.slice(8, 10)}/{item.createdAt.slice(5, 7)}/
                    {item.createdAt.slice(0, 4)}
                  </Link>
                }
                description={`Estado: ${
                  item.status
                } - Monto Total: $${item.products.reduce(
                  (acc, prod) => acc + prod.price * prod.quantity,
                  0
                )}`}
              />
            </List.Item>
          )}
        />
      ) : (
        <h1 style={{ marginTop: "6rem" }}>No hay ordenes para mostrar</h1>
      )}
    </div>
  );
}

export default HistoryOrders;
