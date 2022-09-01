import React from "react";
import Carousel from "../Carousel/Carousel"


function LandingPage() {

    const slides = [
        {
            src: require('../Img/PG0.png'),
          },
          {
            src: require('../Img/PG1.jpeg'),
          },
          {
            src: require('../Img/PG2.jpeg'),
          },
          {
            src: require('../Img/PG3.jpeg'),
          },
          {
            src: require('../Img/PG4.jpg'),
          },
          {
            src: require('../Img/PG5.jpg'),
          }
      ]

    return (
        <div>
            <div>
            <Carousel slides={slides} controls indicators width={1200} />
            </div>
        </div>
    )
}
export default LandingPage;