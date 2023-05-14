"use client";
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../../(main)/AppStateContext";
import Header from "../../ui/Header";

const validate = (formData) => {
    const error = {};

    if (!formData.email) {
        error.email = "Email is required";
    }

    if (!formData.firstName) {
        error.firstName = "First name is required";
    }

    if (!formData.lastName) {
        error.lastName = "Last name is required";
    }

    if (!formData.address) {
        error.address = "Address is required";
    }

    if (!formData.city) {
        error.city = "City is required";
    }

    if (!formData.state) {
        error.state = "State is required";
    }

    if (!formData.zipCode) {
        error.zipCode = "Zip code is required";
    }

    if (!formData.country) {
        error.country = "Country is required";
    }

    if (!formData.phone) {
        error.phone = "Phone is required";
    }

    return error;
};

export default function AccountForm() {
    const isSmallScreen = useMediaQuery("(min-width: 640px)");

    const { state, dispatch } = useContext(AppStateContext);
    const { user } = state;
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

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const error = validate(formData);

        if (Object.keys(error).length > 0) {
            return setErrors(error);
        }

        axios
            .put(
                `${process.env.NEXT_PUBLIC_API_URL}/users/update/${user._id}`,
                formData,
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                dispatch({ type: "LOGIN", payload: res.data });
            })
            .catch((err) => {
                setErrors(err.data);
            });
    };

    return isSmallScreen ? (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 ">
            <Header className="space-y-2">
                <h2 className="text-3xl">Account Details</h2>
                <p className="font-normal opacity-75">
                    Update your account detail.
                </p>
                <hr />
            </Header>
            <form onSubmit={submitHandler} className="gap-5 flex flex-col">
                <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="johndoe@email.com"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.email && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.email}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.firstName && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.firstName}
                            </div>
                        )}
                    </div>
                    <div className="w-1/2  flex flex-col">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.lastName && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.lastName}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-full  flex flex-col">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            placeholder="1234 Main St"
                            onChange={handleChange}
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.address && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.address}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Los Angeles"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.city && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.city}
                            </div>
                        )}
                    </div>
                    <div className="w-1/2  flex flex-col">
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input
                            type="text"
                            name="zipCode"
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="12345"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.zipCode && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.zipCode}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-1/3  flex flex-col">
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="United States"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.country && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.country}
                            </div>
                        )}
                    </div>
                    <div className="w-1/3  flex flex-col">
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="California"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.state && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.state}
                            </div>
                        )}
                    </div>

                    <div className="w-1/3  flex flex-col">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="123-456-7890"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                        />
                        {errors.phone && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.phone}
                            </div>
                        )}
                    </div>
                </div>
                <hr />
                <button
                    type="submit"
                    className="shadow-md py-2 bg-groovy-red rounded-md w-2/12 text-white ml-auto">
                    Update
                </button>
            </form>
        </div>
    ) : (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 ">
            <Header className="space-y-2">
                <h2 className="text-3xl">Account Details</h2>
                <p className="font-normal opacity-75">
                    Update your account detail.
                </p>
                <hr />
            </Header>
            <form onSubmit={submitHandler} className="gap-5 flex flex-col">
                {!errors && (
                    <div className="absolute bg-groovy-red opacity-50 p-5 rounded-md top-[140px] left-[50%] -translate-x-1/2 -translate-y-1/2 shadow-lg ">
                        <div className="flex flex-col gap-2 text-white opacity-100">
                            <p>
                                Oops... It seems like you forgot to fill out a
                                section!
                            </p>
                        </div>
                    </div>
                )}

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@email.com"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>

                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>

                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        placeholder="1234 Main St"
                        onChange={handleChange}
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>

                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Los Angeles"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="12345"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>

                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="California"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="123-456-7890"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                    />
                </div>
                <hr />
                <button
                    type="submit"
                    className="shadow-md py-2 bg-groovy-red rounded-md w-full text-white ml-auto">
                    Update
                </button>
            </form>
        </div>
    );
}
