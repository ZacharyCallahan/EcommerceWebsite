const { useParams } = require("next/navigation");
import { useEffect, useState } from "react";
import blackstar from "../../../../public/blackstar.svg";
import whitestar from "../../../../public/whitestar.svg";
import Image from "next/image";
import axios from "axios";

const AverageRating = ({ id, rating, numberOfReviews }) => {
    
    

    const renderStars = () => {
        //render a black star for the average rating
        const stars = [];
        if (!rating) {
            rating = 0;
        }
        for (let i = 0; i < rating; i++) {
            stars.push(
                <Image
                    key={i + id}
                    src={blackstar}
                    width={100}
                    height={100}
                    alt="rating"
                    className="h-5 w-5 flex-shrink-0"
                />
            );
        }
        //render a white star for the remaining stars
        for (let i = 0; i < 5 - rating; i++) {
            stars.push(
                <Image
                    key={i}
                    src={whitestar}
                    width={100}
                    height={100}
                    alt="rating"
                    className="h-5 w-5 flex-shrink-0"
                />
            );
        }
        return stars;
    };

    return (
        <div className="flex items-center h-full">
            {renderStars()}
            <p
                className="ml-3 text-sm font-medium text-groovy-red">
                {numberOfReviews} reviews
            </p>
        </div>
    );
};

export default AverageRating;
