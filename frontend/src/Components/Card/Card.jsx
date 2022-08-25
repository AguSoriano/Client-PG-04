import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function CardP({ name, id, img, price, shortDesc }) {
  // name = "Celular";
  // stock = 5;
  // price = 123;
  // shortDesc = "Esta es una prueba para ver como queda";
  let newP = `$ ${price}`;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={img} />}
      >
        <Meta title={newP} description={shortDesc} />
      </Card>
    </div>
  );
}

export default CardP;
