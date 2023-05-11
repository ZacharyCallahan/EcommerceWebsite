"use client";
import { useContext, useEffect, useState } from "react";
import CheckoutSummary from "./CheckoutSummary";
import { AppStateContext } from "../../../AppStateContext";
import axios from "axios";

const validateForm = (formData) => {
    const errors = {};

    if (!formData.email) {
        errors.email = "Email is required";
    }

    if (!formData.phone) {
        errors.phone = "Phone number is required";
    }

    if (!formData.firstName) {
        errors.firstName = "First name is required";
    }

    if (!formData.lastName) {
        errors.lastName = "Last name is required";
    }

    if (!formData.address) {
        errors.address = "Address is required";
    }

    if (!formData.city) {
        errors.city = "City is required";
    }

    if (!formData.state) {
        errors.state = "State is required";
    }

    if (!formData.zipCode) {
        errors.zipCode = "Zip code is required";
    }

    if (!formData.country) {
        errors.country = "Country is required";
    }

    return errors;
};

const CheckoutForm = () => {
    const { state, dispatch } = useContext(AppStateContext);
    const { user } = state;
    const [errors, setErrors] = useState({});
    const [products, setProducts] = useState([]);

    const [formData, setFormData] = useState({
        email: user?.email || "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        address: user?.address || "",
        city: user?.city || "",
        state: user?.state || "",
        zipCode: user?.zipCode || "",
        country: user?.country || "",
        phone: user?.phone || "",
    });

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
        console.log("Running effect")
    }, [
        state.cart,
        typeof window !== "undefined" && localStorage.getItem("cart"),
    ]);

    const handleCheckout = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const payload = {
            user: {
                id: state.user._id,
                email: state.user.email ?? formData.email,
                phone: formData.phone ?? state.user.phone,
                firstName: formData.firstName ?? state.user.firstName,
                lastName: formData.lastName ?? state.user.lastName,
            },
            shippingAddress: {
                firstName: formData.firstName ?? state.user.firstName,
                lastName: formData.lastName ?? state.user.lastName,
                address: formData.address ?? state.user.address,
                city: formData.city ?? state.user.city,
                state: formData.state ?? state.user.state,
                zipCode: formData.zipCode ?? state.user.zipCode,
                country: formData.country ?? state.user.country,
            },
            products: state.cart,
            subtotal: subtotal,
            numberOfItems: totalItems,
        };

        axios
            .post("http://localhost:8000/api/checkout", payload)
            .then((res) => {
                dispatch({ type: "EMPTY_CART" });
                //clear form data
                setFormData({
                    email: "",
                    phone: "",
                    firstName: "",
                    lastName: "",
                    address: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    country: "",
                });
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form
            onSubmit={handleCheckout}
            className="w-5/6 m-auto space-y-12 py-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
            <div>
                <div className="bg-white p-5 rounded-md shadow-md gap-5 h-fit">
                    <h2 className="mb-5 font-bold text-2xl">
                        Contact Information
                    </h2>
                    <div>
                        <div className="border-b-2 mb-5 pb-5">
                            <div className="flex flex-col mb-5">
                                <label htmlFor="email">Email address:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.email}
                                    placeholder="johndoe@gmail.com"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.email && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone number:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.phone}
                                    placeholder="123-456-7890"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.phone && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-5">
                            <div className="flex flex-col mb-5">
                                <label htmlFor="firstName">First name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.firstName}
                                    placeholder="John"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.firstName && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="lastName">Last name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.lastName}
                                    placeholder="Doe"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.lastName && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                onChange={(e) => handleChange(e)}
                                value={formData.address}
                                placeholder="1234 Main St"
                                className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            />
                            {errors.address && (
                                <p className="pt-4 text-groovy-red">
                                    {errors.address}
                                </p>
                            )}
                        </div>
                        <div className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-5  sm:space-y-0">
                            <div className="flex flex-col">
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.city}
                                    placeholder="New York"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.city && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.city}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state">State:</label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.state}
                                    placeholder="NY"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.state && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.state}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="zipCode">Zip code:</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.zipCode}
                                    placeholder="10001"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.zipCode && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.zipCode}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="country">Country:</label>
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    onChange={(e) => handleChange(e)}
                                    value={formData.country}
                                    placeholder="United States"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                                {errors.country && (
                                    <p className="pt-4 text-groovy-red">
                                        {errors.country}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CheckoutSummary
                total={total}
                subtotal={subtotal}
                products={products}
                dispatch={dispatch}
                totalItems={totalItems}
            />
        </form>
    );
};

export default CheckoutForm;
