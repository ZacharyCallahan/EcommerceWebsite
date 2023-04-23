import Button from "../Button";

interface SliderLogoProps {
    link: string;
    headerContent: string;
    buttonContent?: string;
}

export default function SliderLogo({
    link,
    headerContent,
    buttonContent,
}: SliderLogoProps) {
    return (
        <div className="relative top-[40%] left-0 w-3/12 bg-black bg-opacity-75 p-4 rounded-r-md">
            <h2 className="text-white text-5xl mb-7 leading-snug">
                {headerContent}
            </h2>
            <Button link={link} className="text-groovy-red font-light">
                {buttonContent ? buttonContent : "SHOP NOW"}
            </Button>
        </div>
    );
}
