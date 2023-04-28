import blackstar from "../../../../public/blackstar.svg";
import whitestar from "../../../../public/whitestar.svg";
import Image from "next/image";
const Rating = () => {
    return (
        <div className="flex items-center h-full">
            {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
            <Image
                src={blackstar}
                width={100}
                height={100}
                alt="rating"
                className="h-5 w-5 flex-shrink-0"
            />
            <Image
                src={blackstar}
                width={100}
                height={100}
                alt="rating"
                className="h-5 w-5 flex-shrink-0"
            />

            <Image
                src={blackstar}
                width={100}
                height={100}
                alt="rating"
                className="h-5 w-5 flex-shrink-0"
            />
            <Image
                src={blackstar}
                width={100}
                height={100}
                alt="rating"
                className="h-5 w-5 flex-shrink-0"
            />
            <Image
                src={whitestar}
                width={100}
                height={100}
                alt="rating"
                className="h-5 w-5 flex-shrink-0"
            />
        </div>
    );
};

export default Rating;
