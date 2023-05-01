const Clothing = require("../models/clothings.model");

const createNewClothing = (req, res) => {
    Clothing.create(req.body)
        .then((clothing) => {
            res.json({ clothing });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllClothings = (req, res) => {
    Clothing.find({})
        .then((clothings) => {
            res.json(clothings);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneClothing = (req, res) => {
    Clothing.findOne({ _id: req.params.id })
        .then((clothing) => {
            res.json(clothing);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};


module.exports = {
    createNewClothing,
    getAllClothings,
    getOneClothing
};