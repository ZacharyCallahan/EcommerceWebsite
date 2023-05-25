const { model } = require('mongoose');
const Order = require('../models/orders.model');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

const getAllOrdersByUser = (req, res) => {
    Order.find({ "user.id": req.params.id })
        .then((orders) => {
            res.json(orders);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    
        
}

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, products } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });
        res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.log("Error:", err.message); // log the error message to the console
        res.status(500).json({ err });
    }
};


module.exports = {
    createNewOrder,
    getAllOrders,
    getOneOrder,
    deleteOrder,
    getAllOrdersByUser,
    createPaymentIntent
};