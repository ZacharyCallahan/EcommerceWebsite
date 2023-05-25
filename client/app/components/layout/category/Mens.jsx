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
            product.gender === "Men" && product.masterCategory === "Apparel"
    );
    const currentProducts = menApparelProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="bg-white mb-32 space-y-32 overflow-x-hidden">
            <Slider>
                <SliderImage imageCSSClass="men-cover-1" />
                <SliderImage imageCSSClass="men-cover-2" />
                <SliderImage imageCSSClass="men-cover-3" />
            </Slider>
            <Trends
                accessories={false}
                gender={"Men"}
                masterCategory={"Apparel"}
                name={"Most Popular Mens Clothing"}
            />
            <ProductSection
                pictureOne={"men-product-cover-3"}
                pictureTwo={"men-product-cover-2"}
                pictureThree={"men-product-cover-1"}
                pictureFour={"men-product-cover-4"}
                productOneContent={"All things a man needs"}
                productTwoContent={"The watch made by Rolex"}
                productThreeContent={"The glasses they could all be wanting"}
                productFourContent={"A handbag made for men"}
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
