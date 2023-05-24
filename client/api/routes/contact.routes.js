const ContactController = require('../controllers/contact.controller');

module.exports = (app) => {
    app.post('/api/contact', ContactController.createNewContact);
}
