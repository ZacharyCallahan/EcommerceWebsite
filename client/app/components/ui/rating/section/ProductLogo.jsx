import Button from "../Button";
const ProductLogo = ({ headerContent }) => {
    return (
        <div className="relative top-[100%] -translate-y-full left-0 w-fit bg-black bg-opacity-75 p-4 rounded-t-md h-fit">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl leading-snug">
                {headerContent}
            </h2>
        </div>
    );
};

export default ProductLogo;