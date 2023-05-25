'use client'
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
      product.gender === "Women" && product.masterCategory === "Apparel"
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
          <Trends />
          <ProductSection category={"womens"} />
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
