'use client'
import Image from "next/image";
import cartImage from "../../../public/shopping-cart.svg";
import Button from "./Button";
import { useEffect, useContext, useState } from "react";
import { AppStateContext } from "../../AppStateContext";

export default function ShoppingCart() {

    const [cart, setCart] = useState([]);

    const { state } = useContext(AppStateContext);
    

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem("cart"));
        setCart(cartStorage);
    }, [state.cart, localStorage.getItem("cart")]);

    return (
        <Button link="/checkout" className="relative">
            <Image src={cartImage} width={30} height={30} alt="shopping-cart" />
            <span className="absolute left-5 top-[-8px] text rounded-full bg-gray-700 px-2 text-center text-xs text-white">
                {/* grab the total quantity of all items together */}

                {cart.reduce((count, item) => count + item.quantity, 0) || 0}
            </span>
        </Button>
    );
}
