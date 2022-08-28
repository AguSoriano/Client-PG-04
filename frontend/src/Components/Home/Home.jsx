import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer"
import * as ReactRedux from "react-redux";
import { getProducts } from "../../redux/actions";

function Home() {
  const dispatch = ReactRedux.useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const products = ReactRedux.useSelector((state) => state.product);

  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: "4rem", marginLeft: "8rem", gap: "2rem"}}>
      {products.length > 1
        ? products.map((prod) => (
            <Card
              key={prod.id}
              id={prod.id}
              name={prod.name}
              img={prod.image}
              price={prod.price}
              stock={prod.stock}
              shortDesc={prod.shortDescription}
            />
          ))
        : "Loading..."}
        <Footer />
    </div>
    
    
    
  );
}

export default Home;
