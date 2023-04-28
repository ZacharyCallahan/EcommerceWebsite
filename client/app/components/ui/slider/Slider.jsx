"use client";
import { Children, useState, useEffect } from "react";

function Slider({ children, className }) {
    const childArray = Children.toArray(children);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlideIndex((currentSlideIndex + 1) % childArray.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentSlideIndex]);

    const currentSlide = childArray[currentSlideIndex];

    return (
        <div className={`relative slider transition ${className}`}>
            {currentSlide}
        </div>
    );
}

export default Slider;
