"use client";
import { useContext } from "react";
import { AppStateContext } from "../../../AppStateContext";
import Product from "./../Product";
import Section from "./../section/Section";
const Trends = ({
    gender,
    secondGender,
    name,
    masterCategory,
    accessories,
}) => {
    const { state } = useContext(AppStateContext);
    const { products } = state;
    return (
        <Section name={name}>
            {accessories === false
                ? products
                      .filter(
                          (product) =>
                              product.gender === gender ||
                              (product.gender === secondGender &&
                                  product.masterCategory === masterCategory)
                      )
                      .slice(0, 6)
                      .map((product) => (
                          <Product key={product._id} product={product} />
                      ))
                : products
                      .filter(
                          (product) => product.masterCategory === masterCategory
                      )
                      .slice(0, 6)
                      .map((product) => (
                          <Product key={product._id} product={product} />
                      ))}
        </Section>
    );
};

export default Trends;
