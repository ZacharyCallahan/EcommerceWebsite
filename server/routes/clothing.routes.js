const ClothingController = require("../controllers/clothing.controller");

module.exports = (app) => {
    app.get("/api/clothing", ClothingController.getAllClothings);
    app.get("/api/clothing/:id", ClothingController.getOneClothing);
};