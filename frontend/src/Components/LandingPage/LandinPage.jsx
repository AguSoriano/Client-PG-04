import React from "react";
import Carousel from "../Carousel/Carousel"


function LandingPage() {

    const slides = [
      "https://photos.google.com/share/AF1QipNOXQvNNyPrqBoBiOYc1SJ3jJz-UDX-Nuwl1suXtYx-r16TwlwYudJrVO0p8QjQAg/photo/AF1QipNrhtVh1mhN22My7XOF3imz3pk1Y6OaxcR7lwqv?key=VjJBZ2NPWVF0SWNuVjJab1IwYmVZVkltVDJjYWJR",
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