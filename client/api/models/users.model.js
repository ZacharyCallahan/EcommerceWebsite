const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
        validate: {
            validator: val => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(val),
            message: "Password must contain at least 1 number, uppercase, and lowercase letter"
        }
    },
    address: {
        type: String,
        minlength: [2, "Address must be 2 characters"]
    },
    city: {
        type: String,
        minlength: [2, "City must be 2 characters"]
    },
    state: {
        type: String,
        minlength: [2, "State must be 2 characters"]
    },
    zipCode: {
        type: Number,
        minlength: [5, "Zip code must be 5 characters"]
    },
    country: {
        type: String,
        minlength: [2, "Country must be 2 characters"]
    },
    phone: {
        type: Number,
        minlength: [10, "Phone number must be 10 characters"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
