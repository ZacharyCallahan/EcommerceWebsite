const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: false,
        },
    },
    products: {
        type: Array,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    numberOfItems: {
        type: Number,
        required: false,
    },

}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
