import { useState } from "react";
import Button from "../Button";
import PopupForm from "./../PopupForm";
const ReviewForm = ({ onClick }) => {
    return (
        <PopupForm onClick={onClick}>
            <div className="rounded-md space-y-5 ">
                <div className="space-y-2 w-fit">
                    <h1 className="text-xl sm:text-2xl font-bold">
                        How was the product?
                    </h1>
                    <p>Leave a review so we can improve!</p>
                </div>
                <form action="/send/message" method="post">
                    <div className="flex flex-col mb-5">
                        <label htmlFor="full_name">Full Name:</label>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            placeholder="John Doe"
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="message">Review:</label>
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Write your review here..."
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-20 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"></textarea>
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
};

export default ReviewForm;
