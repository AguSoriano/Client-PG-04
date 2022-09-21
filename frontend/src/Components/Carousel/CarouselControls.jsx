import style from "./Carousel.module.css"
import { BiChevronsRight, BiChevronsLeft} from "react-icons/bi";

const CarouselControls = ({ prev, next }) => {
    return (
        <div>
            <button className={style.carousel_control_left} onClick={prev}><BiChevronsLeft/></button>
            <button className={style.carousel_control_right} onClick={next}><BiChevronsRight/></button>
        </div>
    )
}

export default CarouselControls