const OrderController = require('../controllers/order.controller');

module.exports = (app) => {
    app.post('/api/checkout', OrderController.createNewOrder);
    app.get('/api/order', OrderController.getAllOrders);
    app.get('/api/order/:id', OrderController.getOneOrder);
    app.delete('/api/order/:id', OrderController.deleteOrder);
}