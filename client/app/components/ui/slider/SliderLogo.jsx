import Button from "../Button";

export default function SliderLogo({
    link,
    headerContent,
    buttonContent,
}) {
    return (
        <div className="relative top-[60%] left-0 sm:w-fit w-8/12 bg-black bg-opacity-75 p-4 rounded-r-md">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-7 leading-snug">
                {headerContent}
            </h2>
            <Button link={link} className="text-groovy-red font-light">
                {buttonContent ? buttonContent : "SHOP NOW"}
            </Button>
        </div>
    );
}
