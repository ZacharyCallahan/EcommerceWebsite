const Author = require("../models/authors.model");

const createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {
            res.json({ newAuthor });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((queriedAuthor) => {
            res.json(queriedAuthor);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => {
            res.json({ updatedAuthor });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deleteExistingUser = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createNewAuthor,
    getOneAuthor,
    getAllAuthors,
    updateAuthor,
    deleteExistingUser,
};