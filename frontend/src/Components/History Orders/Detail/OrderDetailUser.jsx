import React from "react";
import { Link, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  cleanOrderDetail,
  getOrderDetailUser,
} from "../../../redux/actions/Cart/CartAction";

function OrderDetailUser() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();

  const { loginUser } = ReactRedux.useSelector(
    (state) => state.userLoginReducer
  );

  useEffect(() => {
    dispatch(getOrderDetailUser(id, loginUser));
    return () => {
      dispatch(cleanOrderDetail());
    };
  }, [dispatch, id, loginUser]);

  const { orderDetail } = ReactRedux.useSelector(
    (state) => state.ordersReducer
  );

  return (
    <div>
      {orderDetail.order ? (
        <div>
          <section>
            <h2>Orden N: {orderDetail.order.id}</h2>
            <h2>Estado: {orderDetail.order.status}</h2>
          </section>
          <section>
            <h1>Detalle de la compra</h1>
            <h2>
              Total:{" "}
              $ {orderDetail.allProductsDetail.reduce(
                (acc, prod) => acc + prod.price * prod.quantity,
                0
              )}
            </h2>
            {orderDetail.allProductsDetail.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id}>
                <img alt={p.id} src={p.image} />
                <p>{p.name}</p>
                <p>$ {p.price}</p>
                <p>Total: {p.quantity}</p>
                <p>
                  {p.status
                    ? "No disponible"
                    : p.stock === 0
                    ? "No disponible"
                    : "Disponible"}
                </p>
              </Link>
            ))}
          </section>
        </div>
      ) : (
        "cargando"
      )}
    </div>
  );
}

export default OrderDetailUser;
