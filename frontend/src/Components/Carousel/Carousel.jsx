import { useRef, useState, useEffect } from "react";
import CarouselItem from "./CarouselItem"
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.css"

const Carousel = ({ slides, interval = 5000, controls = false, indicators = false, autoPlay = true, width = 1000, ifCard }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideInterval = useRef()

    const prev = () => {
        startSlideTimer()
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
        setCurrentSlide(index)
    }
    
    const next = () => {
        startSlideTimer()
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

    const switchIndex = (index) => {
        startSlideTimer()
        setCurrentSlide(index)
    }

    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer()
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
            }, interval)
        }
    }

    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    return (
        <div className="carousel" style={{ maxWidth : width }}>
            <div 
                className="carousel-inner"
                style={{ transform: `translateX(${-currentSlide * 100}%)`}}
            >
            {slides.map((slide, index) => (
                <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer} startSlide={startSlideTimer} ifCard={ifCard} />
            ))}
            </div>
            {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
            {controls && <CarouselControls prev={prev} next={next} />}
        </div>
    )
}

export default Carousel