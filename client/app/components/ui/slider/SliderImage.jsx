

export default function SliderImage( { imageCSSClass, children }) {
    

    return (
        <div
            className={`${imageCSSClass} bg-cover bg-no-repeat bg-center h-[425px] sm:h-[730px] shadow-lg`}>
            {children}
        </div>
    );
}