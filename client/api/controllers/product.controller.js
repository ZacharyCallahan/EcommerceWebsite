const Product = require("../models/products.model");

const createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.json({ product });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllProducts = (req, res) => {
    Product.find({})
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};



module.exports = {
    createNewProduct,
    getAllProducts,
    getOneProduct
};