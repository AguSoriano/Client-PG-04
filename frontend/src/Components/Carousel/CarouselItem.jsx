import style from "./Carousel.module.css"
const CarouselItem = ({slide, stopSlide, startSlide, ifCard}) => {
    if (ifCard) {
      return (
        <div
          className={style.carousel_item}
          onMouseEnter={stopSlide}
          onMouseOut={startSlide}
        >
          {slide}
        </div>
      );
    } else {
      return (
        <div
          className={style.carousel_item}
          onMouseEnter={stopSlide}
          onMouseOut={startSlide}
        >
          <img src={slide} />
        </div>
      );
    }
  };
  
  export default CarouselItem;