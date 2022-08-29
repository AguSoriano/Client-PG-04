import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getDetail } from "../../redux/actions";
import img from "../Img/Logo1.png";

function Detail() {
  const { id } = useParams();
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail(dispatch));
    };
  }, [dispatch, id]);

  const product = ReactRedux.useSelector((state) => state.prodDetail);

  return (
    <div>
      {product.name ? (
        <div>
          <h1>{product.name}</h1>
          <img
            alt={product.name}
            src={product.image ? product.image : img}
            style={{ width: 450, height: 450 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {product.categories.map((cat) => (
              <p key={cat.id}>{cat.name}</p>
            ))}
          </div>
          <p>{product.longDescription}</p>
          <section>
            <p>Stock disponible</p>
            <h3>{product.stock} unidades</h3>
          </section>
          <section>
            <p>Precio</p>
            <h3>${product.price}</h3>
          </section>
        </div>
      ) : (
        "Loading.."
      )}
    </div>
  );
}

export default Detail;
