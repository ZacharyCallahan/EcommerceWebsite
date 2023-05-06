'use client'
import Image from "next/image";
import cart from "../../../public/shopping-cart.svg";
import Button from "./Button";
import { useContext } from "react";
import { AppStateContext } from "../../AppStateContext";

export default function ShoppingCart() {

    const { state } = useContext(AppStateContext);

    return (
        <Button link="/checkout" className="relative">
            <Image src={cart} width={30} height={30} alt="shopping-cart" />
            <span className="absolute left-5 top-[-8px] text rounded-full bg-gray-700 px-2 text-center text-xs text-white">
                {/* grab the total quantity of all items together */}
                
                {state.cart.reduce((count, item) => count + item.quantity, 0)}
            </span>
        </Button>
    );
}
