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

const Kids = () => {
    const { state } = useContext(AppStateContext);
    const { products } = state;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const menApparelProducts = products.filter(
        (product) =>
            product.gender === "Boys" || product.gender === "Girls" 
    );
    const currentProducts = menApparelProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="bg-white mb-32 space-y-32 overflow-x-hidden">
            <Slider>
                <SliderImage imageCSSClass="kid-cover-1" />
                <SliderImage imageCSSClass="kid-cover-2" />
                <SliderImage imageCSSClass="kid-cover-3" />
                <SliderImage imageCSSClass="kid-cover-4" />
            </Slider>
            <Trends
                accessories={false}
                gender={"Boys"}
                secondGender={"Girls"}
                masterCategory={"Apparel"}
                name={"Most Popular Kids Clothing"}
            />
            <ProductSection
                pictureOne={"kid-product-cover-3"}
                pictureTwo={"kid-product-cover-2"}
                pictureThree={"kid-product-cover-1"}
                pictureFour={"kid-product-cover-4"}
                productOneContent={"Sandals for the summer"}
                productTwoContent={"Back to school bookbag"}
                productThreeContent={"Socks for all occasions"}
                productFourContent={"Hats for the summer"}
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

export default Kids;
