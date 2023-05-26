"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { AppStateContext } from "@/app/AppStateContext";
import CheckoutForm from "@/app/components/ui/checkout/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51NBl7GKfLoHtbY140euK9imAIw1DCpGoJvJM7cyTaCUH03KZDoRddEEOFO0dxGF1ks9O90mPz0mW9tUfspurOf5v00Brsxsw12"
);

const Page = () => {
    const [clientSecret, setClientSecret] = useState(null);
    const { state } = useContext(AppStateContext);
    const [products, setProducts] = useState([]);
    const subtotal = products
        .reduce((accumulator, product) => {
            return accumulator + product.price * product.quantity;
        }, 2)
        .toFixed(2);
    const total = (subtotal * 1.13).toFixed(2) * 100;
    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem("cart"));
        setProducts(cartStorage);
    }, [
        state.cart,
        typeof window !== "undefined" && localStorage.getItem("cart"),
    ]);

    useEffect(() => {
        console.log(total);
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/payment`, {
                amount: total,
            })
            .then((res) => {
                setClientSecret(res.data.clientSecret);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [total]);

    const options = {
        clientSecret: clientSecret,
    };

    return (
        <>
            {clientSecret !== null && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            )}
        </>
    );
};

export default Page;
