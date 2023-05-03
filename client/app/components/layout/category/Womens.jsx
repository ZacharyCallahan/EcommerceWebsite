'use client'
import Trends from "./../../ui/category/Trends";
import Slider from "../../ui/slider/Slider";
import SliderImage from "../../ui/slider/SliderImage";
import Product from "../../ui/Product";
import ProductSection from "../../ui/section/ProductSection";
import Section from "../../ui/section/Section";
import { useContext } from "react";
import { AppStateContext } from "../../../AppStateContext";

const Womens = () => {
    const { state } = useContext(AppStateContext);
    const { products } = state;

    return (
        <div className="bg-white mb-32 space-y-32 overflow-x-hidden">
            {/* <Filter /> */}
            <Slider>
                <SliderImage imageCSSClass="women-cover-1" />
                <SliderImage imageCSSClass="women-cover-2" />
                <SliderImage imageCSSClass="women-cover-3" />
                <SliderImage imageCSSClass="women-cover-4" />
            </Slider>
            <Trends />
            <ProductSection category={"womens"} />
            <Section>
                {products
                    .filter(
                        (product) =>
                            product.gender === "Women" &&
                            product.masterCategory === "Apparel"
                )
                    .slice(6, 40)
                    .map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
            </Section>
        </div>
    );
};

export default Womens;
