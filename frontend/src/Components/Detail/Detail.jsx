import React from "react";
import { useEffect } from "react";
import * as ReactRedux from "react-redux";
function Detail(props) {
  const id = props.match.params.id;
  // const dispatch = ReactRedux.useDispatch();
  // useEffect(() => {
  //   dispatch();
  //   return () => {
  //     dispatch();
  //   };
  // }, [dispatch, id]);
  // const product = ReactRedux.useSelector((state) => state.prodDetail);
  return (
    <div>
      {/* <h1>{product.name}</h1>
      <img alt={product.name} src={product.image} />
      <p>{product.longDescription}</p>
      <h3>{product.stock}</h3>
      <h3>{product.price}</h3> */}
    </div>
  );
}

export default Detail;
