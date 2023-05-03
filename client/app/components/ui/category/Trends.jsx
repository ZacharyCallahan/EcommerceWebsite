"use client";
import Product from "./../Product";
import Section from "./../section/Section";
import { useContext } from "react";
import { AppStateContext } from "../../../AppStateContext";
const Trends = () => {
    const { state } = useContext(AppStateContext);
    const { products } = state;
    return (
        <Section name={"Most Popular Womens Clothing"}>
            {products
                .filter((product) => product.gender === "Women" && product.masterCategory === "Apparel")
                .slice(0, 6).map((product) => (
                <Product key={product._id} product={product} />
            ))}
        </Section>
    );
};

export default Trends;
