"use client";
import Image from "next/image";
import Button from "./Button";
import { useContext } from "react";


export default function Product() {

    
    return (
        <div className="p-4 flex justify-between flex-col h-full bg-gray-100 shadow-lg rounded-md gap-5">
            <Button link="/product/id" className="flex justify-center">
                <Image
                    src={"/mage"}
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-t-lg"
                />
            </Button>
            <h3 className="text-xl">title</h3>
            <form
                action="/add_to_cart"
                method="post"
                className="flex justify-between items-center">
                <p className="font-bold text-xl">$price</p>
                <input type="hidden" name="product_id" value="{{product.id}}" />
                <input
                    type="hidden"
                    name="product_price"
                    value="{{product.price}}"
                />
                <input type="hidden" name="product_quantity" value="1" />
                <button
                    type="submit"
                    className="p-2 bg-groovy-red rounded-md shadow-md w-fit font-bold  text-white text-center">
                    Add to Cart
                </button>
            </form>
        </div>
    );
}
