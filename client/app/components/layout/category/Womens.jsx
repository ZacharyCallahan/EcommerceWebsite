"use client";
import { useState, useContext } from "react";
import { AppStateContext } from "../../../AppStateContext";
import Product from "../../ui/Product";
import ProductSection from "../../ui/section/ProductSection";
import Section from "../../ui/section/Section";
import Slider from "../../ui/slider/Slider";
import SliderImage from "../../ui/slider/SliderImage";
import Trends from "./../../ui/category/Trends";
import Pagination from "./Pagination";

const Womens = () => {
    const { state } = useContext(AppStateContext);
    const { products } = state;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const womensApparelProducts = products.filter(
        (product) =>
            (product.gender === "Women" &&
                product.masterCategory === "Apparel") ||
            product.masterCategory === "Footwear"
    );
    const currentProducts = womensApparelProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="bg-white mb-32 space-y-32 overflow-x-hidden">
            <Slider>
                <SliderImage imageCSSClass="women-cover-1" />
                <SliderImage imageCSSClass="women-cover-2" />
                <SliderImage imageCSSClass="women-cover-3" />
                <SliderImage imageCSSClass="women-cover-4" />
            </Slider>
            <Trends
                accessories={false}
                gender={"Women"}
                masterCategory={"Apparel"}
                name={"Most Popular Womens Clothing"}
            />
            <ProductSection
                pictureOne={"product-cover-3"}
                pictureTwo={"product-cover-2"}
                pictureThree={"product-cover-1"}
                pictureFour={"product-cover-4"}
                productOneContent={"All your essential needs"}
                productTwoContent={"The glasses made by Gucci"}
                productThreeContent={"The handbag they'll all be wanting"}
                productFourContent={"Accessories"}
            />
            <Section id="products-page">
                {currentProducts.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </Section>
            <Pagination
                itemsPerPage={productsPerPage}
                totalItems={womensApparelProducts.length}
                paginate={setCurrentPage}
            />
        </div>
    );
};

export default Womens;
