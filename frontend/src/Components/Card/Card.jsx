import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function CardP({ name, id, img, price, shortDesc }) {
  let newP = `$ ${price}`;
  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card
          hoverable
          style={{ width: 375, height: 450 }}
          cover={<img alt={name} src={img} />}
        >
          <Meta title={newP} description={shortDesc} style={{justifyContent: "center", marginTop: "2rem"}}/>
        </Card>
      </Link>
    </div>
  );
}

export default CardP;
