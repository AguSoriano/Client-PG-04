import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import imgFake from "../Img/Logo1V2.png";

const { Meta } = Card;

function CardP({ name, id, img, price, shortDesc, widthCard, heightCard }) {
  let newP = `$ ${price}`;
  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card
          hoverable
          style={{ width: widthCard, height: heightCard }}
          cover={<img alt={name} src={img ? img : imgFake} />}
        >
          <Meta
            title={newP}
            description={shortDesc}
            style={{ justifyContent: "center", marginTop: "2rem" }}
          />
        </Card>
      </Link>
    </div>
  );
}

export default CardP;
