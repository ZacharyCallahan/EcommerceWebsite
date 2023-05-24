const Contact = require('../models/contacts.model');



module.exports = {
    createNewContact: (req, res) => {
        Contact.create(req.body)
            .then((contact) => {
                res.json({ contact });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    }
}