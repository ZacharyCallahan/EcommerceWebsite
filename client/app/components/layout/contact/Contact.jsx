import { useRef, useState } from "react";
import PopupForm from "../../ui/PopupForm";
import axios from "axios";

const validateForm = (formData) => {
    const errors = {};

    if (!formData.fullName) {
        errors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
        errors.fullName = "Full name must be at least 2 characters";
    }

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email address is invalid";
    }

    if (!formData.message) {
        errors.message = "Message is required";
    } else if (formData.message.length < 10) {
        errors.message = "Message must be at least 10 characters";
    }

    return errors;
};

export default function ({ onClick }) {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            fullName: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log(errors.fir);
            return;
        }
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, formData)
            .then((res) => {
                setSubmitted(true);
                setErrors({});
            })
            .catch((err) => {
                setErrors(err.data);
            });
    };

    return (
        <PopupForm onClick={onClick}>
            <div className="rounded-md space-y-5 ">
                <div className="space-y-2 w-fit">
                    <h1 className="text-xl sm:text-2xl font-bold">
                        Have a question? Shoot us a message.
                    </h1>
                    <p>We are here 24/7 to support you.</p>
                </div>
                {submitted && (
                    <div className="bg-green-100 text-green-500 rounded-md p-2 mt-5 w-fit">
                        Message sent successfully!
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="full_name">Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            ref={nameRef}
                            placeholder="John Doe"
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            required
                        />
                        {errors.fullName && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.fullName}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            ref={emailRef}
                            placeholder="johndoe@gmail.com"
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            required
                        />
                        {errors.email && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            ref={messageRef}
                            cols={30}
                            rows={10}
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-20 max-h-96 min-h-[40px] shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"></textarea>

                        {errors.message && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.message}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="p-2 bg-groovy-red rounded-md shadow-md w-fit font-bold  text-white text-center">
                        Send Message
                    </button>
                </form>
            </div>
        </PopupForm>
    );
}
