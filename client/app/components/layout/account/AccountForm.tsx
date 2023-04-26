"use client";
import { useMediaQuery } from "@material-ui/core";
import { ReactEventHandler, useState } from "react";
import Header from "../../ui/Header";

export default function AccountForm() {
    const isSmallScreen = useMediaQuery("(min-width: 640px)");
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
        phone: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log(errors);
            return;
        }
        console.log(formData);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            email: "",
            first_name: "",
            last_name: "",
            address: "",
            city: "",
            state: "",
            zip_code: "",
            country: "",
            phone: "",
        };

        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        }

        if (!formData.first_name) {
            newErrors.first_name = "First name is required";
            isValid = false;
        }

        if (!formData.last_name) {
            newErrors.last_name = "Last name is required";
            isValid = false;
        }

        if (!formData.address) {
            newErrors.address = "Address is required";
            isValid = false;
        }

        if (!formData.city) {
            newErrors.city = "City is required";
            isValid = false;
        }

        if (!formData.state) {
            newErrors.state = "State is required";
            isValid = false;
        }

        if (!formData.zip_code) {
            newErrors.zip_code = "Zip is required";
            isValid = false;
        }

        if (!formData.country) {
            newErrors.country = "Country is required";
            isValid = false;
        }
        if (!formData.phone) {
            newErrors.phone = "Phone is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return isSmallScreen ? (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 h-fit">
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

                <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                            placeholder="johndoe@email.com"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="first_name">First Name:</label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            value={formData.first_name}
                            onChange={(e) => handleChange(e)}
                            placeholder="John"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
                    </div>
                    <div className="w-1/2  flex flex-col">
                        <label htmlFor="last_name">Last Name:</label>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            value={formData.last_name}
                            onChange={(e) => handleChange(e)}
                            placeholder="Doe"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
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
                            onChange={(e) => handleChange(e)}
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
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
                            onChange={(e) => handleChange(e)}
                            placeholder="Los Angeles"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
                    </div>
                    <div className="w-1/2  flex flex-col">
                        <label htmlFor="zip_code">Zip Code:</label>
                        <input
                            type="text"
                            name="zip_code"
                            id="zip_code"
                            value={formData.zip_code}
                            onChange={(e) => handleChange(e)}
                            placeholder="12345"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
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
                            onChange={(e) => handleChange(e)}
                            placeholder="United States"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
                    </div>
                    <div className="w-1/3  flex flex-col">
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleChange(e)}
                            placeholder="California"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
                    </div>

                    <div className="w-1/3  flex flex-col">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleChange(e)}
                            placeholder="123-456-7890"
                            className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        />
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
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 h-fit">
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
                        onChange={(e) => handleChange(e)}
                        placeholder="johndoe@email.com"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>

                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={formData.first_name}
                        onChange={(e) => handleChange(e)}
                        placeholder="John"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formData.last_name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Doe"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
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
                        onChange={(e) => handleChange(e)}
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>

                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange(e)}
                        placeholder="Los Angeles"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>
                <div>
                    <label htmlFor="zip_code">Zip Code:</label>
                    <input
                        type="text"
                        name="zip_code"
                        id="zip_code"
                        value={formData.zip_code}
                        onChange={(e) => handleChange(e)}
                        placeholder="12345"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>

                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleChange(e)}
                        placeholder="United States"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleChange(e)}
                        placeholder="California"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange(e)}
                        placeholder="123-456-7890"
                        className="w-full mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
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
