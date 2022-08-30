import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const imgInt =
  "https://lh3.googleusercontent.com/pw/AL9nZEW8_LPQQOkdMI_86RQTFMzlCANgD2EFmeK5GtXvoEmEU0phh73zDT9GsmKWqUvEhSIZFJK2uxiUVlWJpc76agf0L_vZdA2KsVFML4HTgx8rwLDyyZlJCiCg6zliLtpplBk8J9LHi0l74gW8TXKBysoJfQ=s790-no?authuser=0";

function CardP({ name, id, img, price, shortDesc }) {
  let newP = `$ ${price}`;
  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card
          hoverable
          style={{ width: 375, height: 450 }}
          cover={<img alt={name} src={img ? img : imgInt} />}
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
