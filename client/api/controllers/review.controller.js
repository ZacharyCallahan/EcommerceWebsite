const Review = require('../models/reviews.model');

module.exports = {
    createNewReview: (req, res) => {
        Review.create(req.body)
            .then((review) => {
                res.json({ review });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    },

    getAllReviewsForProduct: (req, res) => {
        Review.find({ product: req.params.id })
            .then((reviews) => {
                res.json({ reviews });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    },

    deleteReview: (req, res) => {
        Review.findByIdAndDelete(req.params.id)
            .then((review) => {
                res.json({ review });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    }

}
