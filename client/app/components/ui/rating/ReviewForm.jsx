import { useRef, useState } from "react";
import PopupForm from "./../PopupForm";
import { useParams } from "next/navigation";
import axios from "axios";

const validateForm = (formData) => {
    const errors = {};

    if (!formData.fullName) {
        errors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
        errors.fullName = "Full name must be at least 2 characters";
    }

    if (!formData.rating) {
        errors.rating = "Rating is required";
    }

    if (!formData.review) {
        errors.review = "Review is required";
    } else if (formData.review.length < 10) {
        errors.review = "Review must be at least 10 characters";
    }

    return errors;
};

const ReviewForm = ({ onClick, id, setReviews, }) => {
    const nameRef = useRef("");
    const [rating, setRating] = useState(4);
    const reviewRef = useRef("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            product: id,
            fullName: nameRef.current.value,
            rating: rating,
            review: reviewRef.current.value,
        };
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/review`, formData)
            .then((res) => {
                setSubmitted(true);
                setErrors({});
                setReviews((prevReviews) => [...prevReviews, res.data.review]);
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
                        How was the product?
                    </h1>
                    <p>Leave a review so we can improve!</p>
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
                        <label htmlFor="rating" className="mb-2">
                            Rating:
                        </label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="rating"
                                id="rating"
                                value="1"
                                onChange={(e) => setRating(e.target.value)}
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-groovy-red checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-groovy-red"
                            />
                            <label htmlFor="rating">1</label>
                            <input
                                type="radio"
                                name="rating"
                                id="rating"
                                value="2"
                                onChange={(e) => setRating(e.target.value)}
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-groovy-red checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-groovy-red"
                            />
                            <label htmlFor="rating">2</label>
                            <input
                                type="radio"
                                name="rating"
                                id="rating"
                                value="3"
                                onChange={(e) => setRating(e.target.value)}
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-groovy-red checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-groovy-red"
                            />
                            <label htmlFor="rating">3</label>
                            <input
                                type="radio"
                                name="rating"
                                id="rating"
                                value="4"
                                onChange={(e) => setRating(e.target.value)}
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-groovy-red checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-groovy-red"
                            />
                            <label htmlFor="rating">4</label>
                            <input
                                type="radio"
                                name="rating"
                                id="rating"
                                value="5"
                                onChange={(e) => setRating(e.target.value)}
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-groovy-red checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-groovy-red"
                            />
                            <label htmlFor="rating">5</label>
                        </div>
                        {errors.rating && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.rating}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="review">Review:</label>
                        <textarea
                            name="review"
                            id="review"
                            ref={reviewRef}
                            cols={30}
                            dir=""
                            rows={10}
                            placeholder="Write your review here..."
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-20 max-h-96 min-h-[40px] shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"></textarea>

                        {errors.review && (
                            <div className="bg-red-100 text-red-500 rounded-md p-2 mt-5 w-fit">
                                {errors.review}
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
};

export default ReviewForm;
