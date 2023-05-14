const Users = require('../controllers/user.controller');
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post('/api/register', Users.registerUser);
    app.post('/api/login', Users.loginUser);
    app.post('/api/logout', Users.logout);


    app.put('/api/user/update-password/:id', Users.updatePassword);
    app.put("/api/users/update/:id", authenticate, Users.update);

    
    //check if user is logged in
    app.get("/api/users/loggedin", Users.isLoggedIn);
    app.get('/api/users', authenticate, Users.getAll);
    app.get("/api/users/:id", authenticate, Users.getOne);

    


}