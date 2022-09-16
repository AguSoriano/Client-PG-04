import React from "react";
import { useParams } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { useEffect } from "react";
import {
  cleanOrderDetail,
  getOrderDetail,
} from "../../../../redux/actions/Cart/CartAction";

function OrderDetail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();

  const { loginUser } = ReactRedux.useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getOrderDetail(id, loginUser));
    return () => {
      dispatch(cleanOrderDetail());
    };
  }, [dispatch, id, loginUser]);

  const { orderDetail } = ReactRedux.useSelector((state) => state.cartReducer);

  const estados = [
    "carrito",
    "procesando",
    "completada",
    "rechazada",
    "entregada",
  ];

  const handleSelect = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {orderDetail.status ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Estado: {orderDetail.status}</h2>
          <section>
            {/* <label>Modificar estado</label> */}
            <select onChange={(e) => handleSelect(e)}>
              <option value={orderDetail.status}>{orderDetail.status}</option>
              {estados
                .filter((e) => e !== orderDetail.status)
                .map((e) => (
                  <option value={e}>{e}</option>
                ))}
            </select>
          </section>
          <button>modificar</button>
        </form>
      ) : (
        "cargando"
      )}
    </div>
  );
}

export default OrderDetail;
