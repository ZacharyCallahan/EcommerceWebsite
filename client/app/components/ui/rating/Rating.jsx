import blackstar from "../../../../public/blackstar.svg";
import whitestar from "../../../../public/whitestar.svg";
import Image from "next/image";

const Rating = ({ rating }) => {
    const maxRating = 5;
    const filledStars = rating;
    const emptyStars = maxRating - filledStars;

    const renderStars = (count, starImage) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(
                <Image
                    key={i}
                    src={starImage}
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
            {renderStars(filledStars, blackstar)}
            {renderStars(emptyStars, whitestar)}
        </div>
    );
};

export default Rating;
