const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is required"],
        minlength: [2, "Full Name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minlength: [10, "Message must be at least 10 characters long"]
    },
}, { timestamps: true });


const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
