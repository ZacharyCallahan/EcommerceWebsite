"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import Rating from "../../../components/ui/rating/Rating";
import Review from "../../../components/ui/rating/Review";
import { AppStateContext } from "../../AppStateContext";
import ReviewForm from "./../../../components/ui/rating/ReviewForm";
const page = () => {
    const { id } = useParams();
    const [activeSize, setActiveSize] = useState("M");
    const [reviewOpen, setReviewOpen] = useState(false);
    const [product, setProduct] = useState({});
    const [formData, setFormData] = useState({
        product_id: id,
        product_quantity: 1,
        product_size: "M",
    });
    const { dispatch } = useContext(AppStateContext);

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                product: product,
                quantity: formData.product_quantity,
                size: formData.product_size,
            },
        });
    };

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/clothing/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    const sizeHandler = (e) => {
        setFormData({
            ...formData,
            product_size: e.target.value,
        });
        setActiveSize(e.target.value);
    };

    const quantityHandler = (e) => {
        setFormData({
            ...formData,
            product_quantity: e.target.value,
        });
    };

    return (
        <div className="w-5/6 m-auto ">
            <div className="py-16">
                <div className="grid grid-cols-fluid gap-5 items-center justify-center">
                    <Image
                        src={product.image}
                        alt="clothes"
                        className="rounded-md"
                        width={500}
                        height={500}
                    />
                    <div className="grid grid-cols-fluid gap-5">
                        <div className="w-full xl:border-r-[1px] border-b xl:border-b-0 py-5 pr-5 space-y-10">
                            <h2 className="text-2xl font-bold mb-5">
                                {product.productDisplayName}
                            </h2>
                            <div>
                                <p className="mb-3 font-semibold">Highlights</p>
                                <ul className="list-disc pl-4">
                                    <li className="text-gray-500">
                                        Hand cut and sewn locally
                                    </li>
                                    <li className="text-gray-500">
                                        Dyed with our proprietary colors
                                    </li>
                                    <li className="text-gray-500">
                                        Pre-washed & pre-shrunk
                                    </li>
                                    <li className="text-gray-500">
                                        Ultra-soft 100% cotton
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full">
                            <div>
                                <h2 className="text-2xl">${product.price}</h2>
                                <p className="text-sm text-gray-500">
                                    In stock
                                </p>
                                <p className="text-sm text-gray-500">
                                    Free shipping
                                </p>
                                {/* <!-- Reviews --> */}
                                <div className="flex items-center my-5">
                                    <Rating />
                                    <Button
                                        link={"/product/1/reviews"}
                                        className="ml-3 text-sm font-medium  text-groovy-red hover:text-groovy-red-dark">
                                        117 reviews
                                    </Button>
                                </div>
                                <form
                                    onSubmit={handleAddToCart}
                                    className="w-full space-y-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="product_quantity">
                                            Quantity:
                                        </label>
                                        <input
                                            type="number"
                                            name="product_quantity"
                                            id="product_quantity"
                                            min="1"
                                            max="10"
                                            value={formData.product_quantity}
                                            onChange={quantityHandler}
                                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 w-20 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                        />
                                    </div>
                                    <div
                                        id="size-buttons"
                                        className="w-full space-y-5">
                                        <label htmlFor="size">Size:</label>
                                        <div className="flex w-full gap-5">
                                            <button
                                                type="button"
                                                name="size"
                                                onClick={(e) => {
                                                    sizeHandler(e);
                                                }}
                                                className={`bg-white hover:bg-gray-100  border-2 rounded-md w-full h-20  transition ${
                                                    activeSize === "S"
                                                        ? " selected-size"
                                                        : ""
                                                }`}
                                                value="S">
                                                S
                                            </button>
                                            <button
                                                type="button"
                                                name="size"
                                                onClick={(e) => {
                                                    sizeHandler(e);
                                                }}
                                                className={`bg-white hover:bg-gray-100  border-2 rounded-md w-full h-20 transition ${
                                                    activeSize === "M"
                                                        ? " selected-size"
                                                        : ""
                                                }`}
                                                value="M">
                                                M
                                            </button>
                                            <button
                                                type="button"
                                                name="size"
                                                onClick={(e) => {
                                                    sizeHandler(e);
                                                }}
                                                className={`bg-white hover:bg-gray-100  border-2 rounded-md w-full h-20 transition ${
                                                    activeSize === "L"
                                                        ? " selected-size"
                                                        : ""
                                                }`}
                                                value="L">
                                                L
                                            </button>
                                            <button
                                                type="button"
                                                name="size"
                                                onClick={(e) => {
                                                    sizeHandler(e);
                                                }}
                                                className={`bg-white hover:bg-gray-100  border-2 rounded-md w-full h-20 transition ${
                                                    activeSize === "XL"
                                                        ? " selected-size"
                                                        : ""
                                                }`}
                                                value="XL">
                                                XL
                                            </button>
                                        </div>
                                        <button
                                            type="submit"
                                            className="py-3 bg-groovy-red rounded-md w-full shadow-md text-white">
                                            Add to Cart
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <h2 className="text-2xl font-bold border-b-2 pb-5">
                    Recent reviews
                </h2>
                {/* <!-- TODO add the htmlFor loop htmlFor all reviews --> */}
                <Review />
                <div className="flex justify-end">
                    {reviewOpen && (
                        <ReviewForm
                            onClick={() => {
                                setReviewOpen(!reviewOpen);
                            }}
                        />
                    )}
                    <Button
                        onClick={() => {
                            setReviewOpen(!reviewOpen);
                        }}
                        className="pt-5 text-groovy-red hover:text-groovy-red-dark">
                        Write a review
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default page;
