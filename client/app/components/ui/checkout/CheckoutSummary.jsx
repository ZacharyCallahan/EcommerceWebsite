import CheckoutItem from "./CheckoutItem";
import Button from "../Button";
const CheckoutSummary = ({
    total,
    subtotal,
    products,
    dispatch,
    totalItems,
}) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-md gap-5 h-fit">
            <h2 className="mb-5 font-bold text-2xl">Order summary</h2>

            <CheckoutItem products={products} dispatch={dispatch} />
            <div className="space-y-5">
                <div className="border-b-2 pb-5">
                    <div className="flex justify-between mt-5">
                        <p className="text-md">Subtotal</p>
                        <p className="text-md">${subtotal}</p>
                    </div>
                </div>
                <div className="flex justify-between pb-5 border-b-2">
                    <p className="font-bold text-lg">Total</p>
                    <p className="font-bold text-lg">${total}</p>
                </div>

                {totalItems !== 0 ? (
                    <button
                        type="submit"
                        className="py-2 bg-groovy-red rounded-md w-full shadow-md text-white">
                        Checkout
                    </button>
                ) : (
                    <p className="text-center text-lg text-slate-900">
                        Your cart is empty! We can't checkout nothing!
                    </p>
                )}
            </div>
        </div>
    );
};

export default CheckoutSummary;
