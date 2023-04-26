"use client";
import { useMediaQuery } from "@material-ui/core";
import Image, { StaticImageData } from "next/image";
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
    const isSmallScreen = useMediaQuery("(min-width: 640px)");
    return (
        <>
            {imageSide === "right" ? (
                <div className="w-5/6 m-auto sm:flex sm:gap-8 sm:items-center">
                    <Details>
                        <DetailsItem className="text-center sm:text-left ">
                            {children}
                        </DetailsItem>
                    </Details>
                    {imageSRC && imageALT && (
                        <Image
                            src={imageSRC}
                            alt={imageALT}
                            width={1000}
                            height={1000}
                            className="w-full sm:w-1/3 sm:h-full"
                        />
                    )}
                </div>
            ) : isSmallScreen ? (
                <div className="w-5/6 m-auto sm:flex sm:gap-8 sm:items-center">
                    {imageSRC && imageALT && (
                        <Image
                            src={imageSRC}
                            alt={imageALT}
                            width={1000}
                            height={1000}
                            className="w-full sm:w-1/3 sm:h-full"
                        />
                    )}
                    <Details>
                        <DetailsItem className="text-center sm:text-left ">
                            {children}
                        </DetailsItem>
                    </Details>
                </div>
            ) : (
                <div className="w-5/6 m-auto sm:flex sm:gap-8 sm:items-center">
                    <Details>
                        <DetailsItem className="text-center sm:text-left ">
                            {children}
                        </DetailsItem>
                    </Details>
                    {imageSRC && imageALT && (
                        <Image
                            src={imageSRC}
                            alt={imageALT}
                            width={1000}
                            height={1000}
                            className="w-full sm:w-1/3 sm:h-full mt-20"
                        />
                    )}
                </div>
            )}
        </>
    );
}
