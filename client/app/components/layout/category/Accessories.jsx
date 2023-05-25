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

const Mens = () => {
    const { state } = useContext(AppStateContext);
    const { products } = state;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const menApparelProducts = products.filter(
        (product) =>
            (product.masterCategory === "Accessories")
    );
    const currentProducts = menApparelProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="bg-white mb-32 space-y-32 overflow-x-hidden">
            <Slider>
                <SliderImage imageCSSClass="acc-cover-1" />
                <SliderImage imageCSSClass="acc-cover-2" />
                <SliderImage imageCSSClass="acc-cover-3" />
                <SliderImage imageCSSClass="acc-cover-4" />
            </Slider>
            <Trends
                accessories={true}
                masterCategory={"Accessories"}
                name={"Most Popular Accessories"}
            />
            <ProductSection
                pictureOne={"acc-product-cover-3"}
                pictureTwo={"acc-product-cover-2"}
                pictureThree={"acc-product-cover-1"}
                pictureFour={"acc-product-cover-4"}
                productOneContent={"The ball cap for the hot summer"}
                productTwoContent={"The cufflinks for those special occasion"}
                productThreeContent={"Glasses for every occasions"}
                productFourContent={"The handbag to match your outfit"}
            />
            <Section id="products-page">
                {currentProducts.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </Section>
            <Pagination
                itemsPerPage={productsPerPage}
                totalItems={menApparelProducts.length}
                paginate={setCurrentPage}
            />
        </div>
    );
};

export default Mens;
