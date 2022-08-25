import React from "react";
// import { useEffect } from "react";
import Card from "../Card/Card";
import * as ReactRedux from "react-redux";

function Home() {
  // const dispatch = ReactRedux.useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts)
  // }, [dispatch]);

  const products = ReactRedux.useSelector((state) => state.product);

  return (
    <div>
      {products.length > 1
        ? products.map((prod) => (
            <Card
              key={prod.id}
              id={prod.id}
              name={prod.name}
              img={prod.img}
              price={prod.price}
              stock={prod.stock}
              shortDesc={prod.shortDesc}
            />
          ))
        : "Loading..."}
    </div>
  );
}

export default Home;
