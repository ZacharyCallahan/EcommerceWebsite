interface SliderImageProps {
    imageCSSClass: string;
    children?: React.ReactNode;
}

export default function SliderImage( { imageCSSClass, children }: SliderImageProps) {
    

    return (
        <div className={`${imageCSSClass} bg-cover bg-no-repeat bg-center h-[730px]`}>
            {children}
        </div>
    );
}