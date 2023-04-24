'use client'
import { Children, useState, useEffect } from "react";
import SliderImage from "./SliderImage";
import SliderLogo from "./SliderLogo";
import { memo } from "react";
import Image from "next/image";
import image3 from "../../../../public/beach-work-3.jpg";
import image2 from "../../../../public/beach-work-2.jpg";
import { Slide } from "@material-ui/core";

interface SliderProps {
    children: React.ReactNode;
}

function Slider({ children }: SliderProps) {
    const childArray = Children.toArray(children);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlideIndex((currentSlideIndex + 1) % childArray.length);
        }, 10000);
        return () => clearInterval(intervalId);
    }, [currentSlideIndex]);

    const currentSlide: any = childArray[currentSlideIndex];

    return (
        <div className="relative slider transition">
    
                {currentSlide}
        </div>
    );
}

export default memo(Slider);
