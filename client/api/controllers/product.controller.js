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

// const delete5000Products = (req, res) => {
//     Product.find().limit(1079)
//         .then((products) => {
//             const productIds = products.map((product) => product._id);
//             return Product.deleteMany({ _id: { $in: productIds } });
//         })
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         });
// };

module.exports = {
    createNewProduct,
    getAllProducts,
    getOneProduct,
    // delete5000Products,
};