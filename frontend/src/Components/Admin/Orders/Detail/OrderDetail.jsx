import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  cleanOrderDetail,
  editStatusOrder,
  getOrderDetail,
} from "../../../../redux/actions/Cart/CartAction";
import { useState } from "react";

function OrderDetail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();
  const [input, setInput] = useState("");
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

  const estados = ["procesando", "completada", "rechazada", "entregada"];

  const handleSelect = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editStatusOrder(id, loginUser, input));
    navigate(-1);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {orderDetail.order ? (
        <div>
          <section>
            <h2>Orden N: {orderDetail.order.id}</h2>
            <h2>Estado: {orderDetail.order.status}</h2>
            <h2>Usuario: {orderDetail.user.email}</h2>
            <select onChange={(e) => handleSelect(e)}>
              <option value={orderDetail.order.status}>
                {orderDetail.order.status}
              </option>
              {estados
                .filter((e) => e !== orderDetail.order.status)
                .map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))}
            </select>
            <button type="submit">modificar</button>
          </section>
          <section>
            <h1>Detalle de la compra</h1>
            {orderDetail.allProductsDetail.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id}>
                <img alt={p.id} src={p.image} />
                <p>{p.name}</p>
                <p>{p.price}</p>
                <p>{p.quantity}</p>
                <p>{p.status ? "No disponible" : "Disponible"}</p>
              </Link>
            ))}
          </section>
        </div>
      ) : (
        "cargando"
      )}
    </form>
  );
}

export default OrderDetail;
