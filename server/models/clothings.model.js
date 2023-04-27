const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    gender: { type: String, required: true },
    masterCategory: { type: String, required: true },
    subCategory: { type: String, required: true },
    articleType: { type: String, required: true },
    baseColour: { type: String, required: true },
    season: { type: String, required: true },
    year: { type: Number, required: true },
    usage: { type: String, required: true },
    productDisplayName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
