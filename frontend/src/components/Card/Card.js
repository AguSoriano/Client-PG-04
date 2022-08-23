import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function CardP({ name, id, img, price, stock, shortDesc }) {
  name = "Zapato";
  img =
    "https://i.pinimg.com/236x/70/a7/c7/70a7c7d1df887bbd70452f52aa462925--fashion-shoes-womens-fashion.jpg";
  stock = 5;
  price = 123;
  shortDesc = "Esta es una prueba para ver como queda";
  let priceM = `$ ${price}`;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={img} />}
      >
        <Meta title={priceM} description={shortDesc} />
      </Card>
    </div>
  );
}

export default CardP;
