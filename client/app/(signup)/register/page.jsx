"use client";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import axios from "axios";
import { useState } from "react";


const validateForm = (formData) => {
    const errors = {};

    if (!formData.firstName) {
        errors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName) {
        errors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email address is invalid";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
            formData.password
        )
    ) {
        errors.password =
            "Password must contain at least 1 uppercase letter, one lowercase letter and one number";
    }

    if (!formData.confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
};

const page = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});



    const submitHandler = (e) => {
        e.preventDefault();
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        axios
            .post("http://localhost:8000/api/register", formData, {withCredentials: true})
            .then((res) => {
                setErrors(res.data)
                window.location.href = "/";
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const { firstName, lastName, email, password, confirmPassword } = formData;

    return (
        <main className="flex items-center justify-center h-screen flex-col ">
            <Logo headerClass="text-3xl" imageClass="w-16" />

            <form onSubmit={submitHandler} className="w-[400px]">
                <div className="flex flex-col my-5">
                    {errors.msg && (
                        <p className="text-black text-sm font-bold">
                            {errors.msg}
                        </p>
                    )}
                    <label htmlFor="firstName" className="font-bold">
                        First Name:
                    </label>
                    <input
                        onChange={changeHandler}
                        value={firstName}
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="John"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                    {errors.firstName && (
                        <p className="text-black text-sm font-bold">
                            {errors.firstName}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="lastName" className="font-bold">
                        Last Name:
                    </label>
                    <input
                        onChange={changeHandler}
                        value={lastName}
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                    {errors.lastName && (
                        <p className="text-black text-sm font-bold">
                            {errors.lastName}
                        </p>
                    )}
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="font-bold">
                        Email address:
                    </label>
                    <input
                        onChange={changeHandler}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                    {errors.email && (
                        <p className="text-black text-sm font-bold">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="password" className="font-bold">
                        Password:
                    </label>
                    <input
                        onChange={changeHandler}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Abcd123!@#"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                    {errors.password && (
                        <p className="text-black text-sm font-bold">
                            {errors.password}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="confirmPassword" className="font-bold">
                        Confirm Password:
                    </label>
                    <input
                        onChange={changeHandler}
                        value={confirmPassword}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Abcd123!@#"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                    {errors.confirmPassword && (
                        <p className="text-black text-sm font-bold">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="py-2 bg-groovy-red rounded-md w-full shadow-md text-white">
                    Sign up for an account
                </button>
            </form>
            <p className="pt-5">
                Already have an account?{" "}
                <Button
                    link="/login"
                    className="text-white underline hover:text-gray-200">
                    Login!
                </Button>
            </p>
        </main>
    );
};

export default page;
