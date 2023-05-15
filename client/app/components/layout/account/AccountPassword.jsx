"use client";
import { AppStateContext } from "@/app/AppStateContext";
import axios from "axios";
import { useContext, useState } from "react";
import Header from "../../ui/Header";

const validate = (formData) => {
    const error = {};
    if (formData.newPassword !== formData.confirmPassword) {
        error.confirmPassword = "Passwords do not match";
    }
    return error;
};

const AccountPassword = () => {
    const { state } = useContext(AppStateContext);
    const user = state.user;
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validate(formData);
        if (Object.keys(error).length > 0) {
            return setErrors(error);
        }

        axios
            .put(
                `${process.env.NEXT_PUBLIC_API_URL}/user/update-password/${user._id}`,
                formData,
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                setFormData({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });
                setErrors({ success: "Password updated successfully" });
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data);
            });

        console.log(errors);
        console.log(formData);
    };
    const handleChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };
    return (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 h-[640px]">
            <Header className="space-y-2">
                <h2 className="text-3xl">Account Password</h2>
                <p className="font-normal opacity-75">
                    Shows all of your orders that you've place.
                </p>
                <hr />
            </Header>

            <form onSubmit={handleSubmit}>
                {errors.message && (
                    <div className="bg-red-100 text-red-500 rounded-md p-3">
                        {errors.message}
                    </div>
                )}
                {errors.success && (
                    <div className="bg-green-100 text-green-500 rounded-md p-3 mb-5 w-fit">
                        {errors.success}
                    </div>
                )}
                <div className="grid grid-cols-fluid gap-5 mb-5">
                    <div className="flex flex-col">
                        <label htmlFor="oldPassword" className="font-bold">
                            Current Password:
                        </label>

                        <input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Abcd123!@#"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            className=" mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            required
                        />
                        {errors.oldPassword && (
                            <div className="bg-red-100 text-red-500 rounded-md p-3 mt-5">
                                {errors.oldPassword}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="newPassword" className="font-bold">
                            New Password:
                        </label>

                        <input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Abcd123!@#"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className=" mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            required
                        />
                        {errors.confirmPassword && (
                            <div className="bg-red-100 text-red-500 rounded-md p-3 mt-5">
                                {errors.newPassword}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirm_password" className="font-bold">
                            Confirm Password:
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Abcd123!@#"
                            className=" mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            required
                        />
                    </div>
                </div>
                <hr />
                <button
                    type="submit"
                    className="bg-groovy-red mt-5 text-white rounded-md h-10 px-3 py-2 shadow-md hover:bg-groovy-red-dark focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none">
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default AccountPassword;
