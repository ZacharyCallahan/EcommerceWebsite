import { useParams } from "next/navigation";
import Rating from "./Rating";
import { useEffect, useState } from "react";
import axios from "axios";

const Review = ({ reviews, id }) => {
    return (
        <>
            {reviews.length !== 0 ? (
                reviews.map((review) => (
                    <div
                        key={review._id}
                        className="grid grid-cols-fluid items-center justify-center py-5 border-b-2 gap-5">
                        <div>
                            <h3 className="font-bold mb-3">
                                {review.fullName}
                            </h3>
                            <p className="text-gray-500">{review.createdAt}</p>
                        </div>
                        <Rating rating={review.rating} />
                        <div>
                            <p className="text-gray-500">{review.review}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid grid-cols-fluid items-center justify-center py-5 border-b-2 gap-5">
                    <div>
                        <h3 className="">No reviews yet! Leaving reviews help us know how we can improve!</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default Review;
