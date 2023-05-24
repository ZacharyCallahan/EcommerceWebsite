const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: [true, "Full Name is required"],
        minlength: [2, "Full Name must be at least 2 characters long"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating must be at most 5"]
    },
    review: {
        type: String,
        required: [true, "Review is required"],
        minlength: [10, "Review must be at least 10 characters long"]
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }
}, { timestamps: true });


const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;

