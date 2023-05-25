const OrderController = require('../controllers/order.controller');

module.exports = (app) => {
    app.post('/api/checkout', OrderController.createNewOrder);
    app.post('/api/payment', OrderController.createPaymentIntent);

    app.get('/api/order', OrderController.getAllOrders);
    app.get('/api/order/:id', OrderController.getOneOrder);
    app.get('/api/orders/user/:id', OrderController.getAllOrdersByUser)
    
    app.delete('/api/order/:id', OrderController.deleteOrder);
}