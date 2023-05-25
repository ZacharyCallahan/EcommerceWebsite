import ProductLogo from "../section/ProductLogo";
const ProductSection = ({productOneContent, productTwoContent, productThreeContent, productFourContent, pictureOne, pictureTwo, pictureThree, pictureFour}) => {
    return (
        <div className="grid grid-cols-product-fluid h-[720px] ">
            <div className={`${pictureOne} h-full flex justify-center`}>
                <ProductLogo headerContent={productOneContent} />
            </div>
            <div className="h-full">
                <div
                    className={`bg-blue-400 h-1/2 ${pictureTwo} flex justify-center`}>
                    <ProductLogo headerContent={productTwoContent} />
                </div>
                <div className="h-1/2 flex">
                    <div
                        className={`bg-red-400 w-1/2 ${pictureThree} flex justify-center`}>
                        <ProductLogo headerContent={productThreeContent} />
                    </div>
                    <div className={`bg-orange-700 w-1/2 ${pictureFour} flex justify-center`}>
                        <ProductLogo headerContent={productFourContent} />
                    </div>
                </div>
            </div>
        </div>
        // <div className="grid grid-cols-product-fluid h-[720px] ">
        //     <div className="product-cover-3 h-full flex justify-center">
        //         <ProductLogo headerContent={"All your essential needs"} />
        //     </div>
        //     <div className="h-full">
        //         <div className="bg-blue-400 h-1/2 product-cover-2 flex justify-center">
        //             <ProductLogo headerContent={"The glasses made by Gucci"} />
        //         </div>
        //         <div className="h-1/2 flex">
        //             <div className="bg-red-400 w-1/2 product-cover-1 flex justify-center">
        //                 <ProductLogo
        //                     headerContent={"The handbag they'll all be wanting"}
        //                 />
        //             </div>
        //             <div className="bg-orange-700 w-1/2 product-cover-4 flex justify-center">
        //                 <ProductLogo headerContent={"Accessories"} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProductSection;
