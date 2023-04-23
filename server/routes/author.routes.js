const authorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/author", authorController.createNewAuthor);
    app.get("/api/author", authorController.getAllAuthors);
    app.get("/api/author/:id", authorController.getOneAuthor);
    app.put("/api/author/:id", authorController.updateAuthor);
    app.delete("/api/author/:id", authorController.deleteExistingUser);
};