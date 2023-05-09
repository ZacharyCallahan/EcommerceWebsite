import Image from "next/image";
import Button from "../Button";

const CheckoutItem = ({ products, dispatch}) => {
    const handleRemoveFromCart = (e, id) => {
        e.preventDefault();
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id,
        });
    };

    return (
        <ul className="space-y-5">
            {products.map((product) => (
                <li key={product.id} className="flex justify-between border-b-2 pb-5">
                    <div className="flex gap-5 h-fit">
                        <Image
                            key={product.id}
                            src={product.image}
                            alt="product"
                            width={100}
                            height={100}
                            className="w-20 rounded-md"
                        />

                        <div className="w-1/2">
                            <h3 className="font-bold text-lg">
                                {product.productDisplayName}
                            </h3>
                            <p className="text-sm text-gray-500">
                                Size: {product.size}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between text-right w-1/2">
                        <div>
                            <p className="font-bold text-lg">
                                ${(product.price * product.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                                Quantity: {product.quantity}
                            </p>
                        </div>
                        <Button
                            onClick={(e) => handleRemoveFromCart(e, product.id)}
                            className="hover:text-groovy-red text-right">
                            Remove
                        </Button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CheckoutItem;
