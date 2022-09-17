import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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

  const { loginUser } = ReactRedux.useSelector((state) => state.userLoginReducer);

  useEffect(() => {
    dispatch(getOrderDetail(id, loginUser));
    return () => {
      dispatch(cleanOrderDetail());
    };
  }, [dispatch, id, loginUser]);

  const { orderDetail } = ReactRedux.useSelector((state) => state.ordersReducer);

  const estados = [
    "carrito",
    "procesando",
    "completada",
    "rechazada",
    "entregada",
  ];

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
      {orderDetail.status ? (
        <div >
          <h2>Usuario: {orderDetail.userId}</h2>
          <h2>Estado: {orderDetail.status}</h2>
          <section>
            {/* <label>Modificar estado</label> */}
            <select onChange={(e) => handleSelect(e)}>
              <option value={orderDetail.status}>{orderDetail.status}</option>
              {estados
                .filter((e) => e !== orderDetail.status)
                .map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))}
            </select>
          </section>
          <button type="submit">modificar</button>
        </div>
      ) : (
        "cargando"
      )}
    </form>
  );
}

export default OrderDetail;
