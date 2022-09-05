
import { BiChevronsRight, BiChevronsLeft} from "react-icons/bi";

const CarouselControls = ({ prev, next }) => {
    return (
        <div>
            <button className="carousel-control left" onClick={prev}><BiChevronsLeft/></button>
            <button className="carousel-control right" onClick={next}><BiChevronsRight/></button>
        </div>
    )
}

export default CarouselControls