import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  cleanOrderDetail,
  getOrderDetail,
} from "../../../../redux/actions/Cart/CartAction";
import style from "./OrderDetail.module.css";
import { Card } from "antd";
import { MdArrowBack } from "react-icons/md";
import Loading from "../../../Loading/Loading";

function OrderDetail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();
  const navigate = useNavigate();

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getOrderDetail(id, loginUser));
    return () => {
      dispatch(cleanOrderDetail());
    };
  }, [dispatch, id, loginUser]);

  const { orderDetail } = ReactRedux.useSelector(
    (state) => state.ordersReducer
  );

  const color = (p) => {
    if (p) {
      return "red";
    }
    return "green";
  };

  return (
    <div>
      {orderDetail.order ? (
        <div className={style.mainOrd}>
          <MdArrowBack
            onClick={() => navigate(-1)}
            className={style.listName}
          />
          <Card
            title={`Orden N: ${
              orderDetail.order.id
            } - Fecha: ${orderDetail.order.createdAt.slice(0, 10)}`}
            bordered={false}
            style={{
              width: "60%",
              // height: "10rem",
              border: "1px solid grey",
            }}
          >
            <p>Estado: {orderDetail.order.status}</p>
            <p>Usuario: {orderDetail.user.email}</p>
            <p>
              Monto Total: ${" "}
              {orderDetail.allProductsDetail.reduce(
                (acc, prod) => acc + prod.price * prod.quantity,
                0
              )}
            </p>
          </Card>
          <section>
            <h1>Detalle de la compra</h1>
            <div className={style.listProd}>
              {orderDetail.allProductsDetail.map((p) => (
                <Link
                  to={`/products/${p.id}`}
                  key={p.id}
                  className={style.linkToDetail}
                >
                  <Card
                    title={p.name.toUpperCase()}
                    bordered={false}
                    style={{
                      width: "350px",
                      // height: "480px",
                      border: "1px solid grey",
                    }}
                    hoverable
                    cover={
                      <img
                        alt={p.id}
                        src={p.image}
                        style={{
                          display: "flex",
                          margin: "auto",
                          width: "340px",
                          height: "230px",
                        }}
                      />
                    }
                  >
                    <p>
                      {p.quantity === 1
                        ? `${p.quantity} unidad`
                        : `${p.quantity} unidades`}
                    </p>
                    <p>Total: $ {p.price * p.quantity}</p>
                    <p style={{ color: color(p.status), fontWeight: "bold" }}>
                      {p.status ? "No disponible" : "Disponible"}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default OrderDetail;
