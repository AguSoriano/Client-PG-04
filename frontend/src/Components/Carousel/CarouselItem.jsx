const CarouselItem = ({slide, stopSlide, startSlide, ifCard}) => {
    if (ifCard) {
      return (
        <div
          className="carousel-item"
          onMouseEnter={stopSlide}
          onMouseOut={startSlide}
        >
          {slide}
        </div>
      );
    } else {
      return (
        <div
          className="carousel-item"
          onMouseEnter={stopSlide}
          onMouseOut={startSlide}
        >
          <img src={slide} />
        </div>
      );
    }
  };
  
  export default CarouselItem;