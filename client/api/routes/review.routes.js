const ReviewController = require('../controllers/review.controller');

module.exports = (app) => {

    app.post('/api/review', ReviewController.createNewReview);

    app.get('/api/review/:id', ReviewController.getAllReviewsForProduct);

    app.delete('/api/review/:id', ReviewController.deleteReview);
}

