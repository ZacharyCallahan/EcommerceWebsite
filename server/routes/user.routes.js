const Users = require('../controllers/user.controller');
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post('/api/register', Users.registerUser);
    app.post('/api/login', Users.loginUser);
    app.get('/api/users/logout', Users.logout);

    //check if user is logged in
    app.get("/api/users/loggedin", Users.isLoggedIn);

    app.get('/api/users', authenticate, Users.getAll);
}