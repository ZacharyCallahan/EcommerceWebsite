"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../../AppStateContext";
import CheckoutSummary from "./CheckoutSummary";
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const { state, dispatch } = useContext(AppStateContext);
    const { user } = state;
    const [products, setProducts] = useState([]);
    const stripe = useStripe();
    const elements = useElements();

    const subtotal = products
        .reduce((accumulator, product) => {
            return accumulator + product.price * product.quantity;
        }, 0)
        .toFixed(2);

    const total = (subtotal * 1.13).toFixed(2);

    const totalItems = products.reduce((accumulator, product) => {
        return accumulator + product.quantity;
    }, 0);

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem("cart"));
        setProducts(cartStorage);
        console.log("Running effect");
    }, [
        state.cart,
        typeof window !== "undefined" && localStorage.getItem("cart"),
    ]);

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.

        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        if (user) {
            const payload = {
                user: {
                    id: state.user._id,
                    email: state.user.email,
                    firstName: state.user.firstName,
                    lastName: state.user.lastName,
                    phone: state.user.phone,
                },
                products: state.cart,
                subtotal: total,
            };
            console.log(payload);
            axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, payload)
                .then((res) => {
                    dispatch({ type: "EMPTY_CART" });
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: `http://localhost:3000/`,
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-5/6 m-auto space-y-12 py-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="space-y-5 p-5">
                <PaymentElement />
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
            <CheckoutSummary
                total={total}
                subtotal={subtotal}
                products={products}
                dispatch={dispatch}
            />
        </form>
    );
};

export default CheckoutForm;
