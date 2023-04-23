import Image, { StaticImageData } from "next/image";
import watchTwo from "../../../../public/watch-2.png";
import Details from "../details/Details";
import DetailsItem from "../details/DetailsItem";

interface MainSectionProps {
    children?: React.ReactNode;
    imageSRC?: StaticImageData;
    imageALT?: string;
    imageSide?: string;
}

export default function MainSectionItem({
    children,
    imageSRC,
    imageALT,
    imageSide,
}: MainSectionProps) {
    return (
        <>
            {imageSide === "right" ? (
                <div className="container m-auto flex justify-between items-center">
                    <Details>
                        <DetailsItem className="text-left w-1/2">
                            {children}
                        </DetailsItem>
                    </Details>
                    {imageSRC && imageALT && (
                        <Image
                            src={imageSRC}
                            alt={imageALT}
                            width={1000}
                            height={1000}
                            className="w-1/3 h-full"
                        />
                    )}
                </div>
            ) : (
                <div className="container m-auto flex justify-between items-center">
                    {imageSRC && imageALT && (
                        <Image
                            src={imageSRC}
                            alt={imageALT}
                            width={1000}
                            height={1000}
                            className="w-1/3 h-full"
                        />
                    )}
                    <Details>
                        <DetailsItem className="text-left w-1/2">
                            {children}
                        </DetailsItem>
                    </Details>
                </div>
            )}
        </>
    );
}
