"use client";
import Image from "next/image";
import { useContext } from "react";
import { AppStateContext } from "../../AppStateContext";
import Button from "./Button";

export default function Product({ product }) {
    

    return (
        <div className="p-4 grid grid-cols-1 content-between h-full bg-gray-100 shadow-lg rounded-md gap-5">
            <Button link="/product/id" className="flex justify-center ">
                <Image
                    src={product.image}
                    alt=""
                    className="rounded-md "
                    width={1000}
                    height={1000}
                />
            </Button>
            <div>
                <h3 className="text-xl">{product.productDisplayName}</h3>
                <form
                    action="/add_to_cart"
                    method="post"
                    className="flex justify-between items-center">
                    <p className="font-bold text-xl">${product.price}</p>
                    <input type="hidden" name="product_id" value={product._id} />
                    <input
                        type="hidden"
                        name="product_price"
                        value={product.price}
                    />
                    <input type="hidden" name="product_quantity" value="1" />
                    <button
                        type="submit"
                        className="p-2 bg-groovy-red rounded-md shadow-md w-fit font-bold  text-white text-center">
                        Add to Cart
                    </button>
                </form>
            </div>
        </div>
    );
}