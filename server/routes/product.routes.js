const ProductContoller = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/clothing", ProductContoller.getAllProducts);
    app.get("/api/clothing/:id", ProductContoller.getOneProduct);
};