import Image from "next/image";
import cart from "../../../public/shopping-cart.svg";
import Button from "./Button";

export default function ShoppingCart() {
    return (
        <Button link="/checkout" className="relative">
            <Image src={cart} width={30} height={30} alt="shopping-cart" />
            <span className="absolute left-5 top-[-8px] text rounded-full bg-gray-700 px-2 text-center text-xs text-white">
                0
            </span>
        </Button>
    );
}
