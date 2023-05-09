const Order = require('../models/orders.model');

const createNewOrder = (req, res) => {
    Order.create(req.body)
        .then((order) => {
            res.json({ order });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
}

const getAllOrders = (req, res) => {
    Order.find({})
        .then((orders) => {
            res.json(orders);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
}

const getOneOrder = (req, res) => {
    Order.findOne({ _id: req.params.id })
        .then((order) => {
            res.json(order);
        }
        )
        .catch((err) => {
            res.status(400).json({ err });
        }
        );
}

const deleteOrder = (req, res) => {
    Order.deleteOne({ _id: req.params.id })
        .then((order) => {
            res.json(order);
        }
        )
        .catch((err) => {
            res.status(400).json({ err });
        }
        );
}


module.exports = {
    createNewOrder,
    getAllOrders,
    getOneOrder,
    deleteOrder
};