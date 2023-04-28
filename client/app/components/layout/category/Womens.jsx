import Trends from "./../../ui/category/Trends";
import Slider from "../../ui/slider/Slider";
import SliderImage from "../../ui/slider/SliderImage";
import Product from "../../ui/Product";
import ProductSection from "../../ui/section/ProductSection";
import Section from "../../ui/section/Section";

const Womens = () => {
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
            <ProductSection />
            <Section>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Section>
        </div>
    );
};

export default Womens;
