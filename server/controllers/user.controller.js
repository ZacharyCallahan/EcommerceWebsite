const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = process.env.SECRET_KEY;



module.exports = {

    registerUser: async (req, res) => { //use async await when you have a lot of logic
        try { //check if user exists first
            const potentialUser = await User.findOne({ email: req.body.email })
            if (potentialUser) {
                res.status(400).json({ message: "Email Address is taken" })
            }
            else {
                //actually create user if they pass check
                const newUser = await User.create(req.body)
                console.log(req.body)
                console.log(newUser._id)
                //generates a jsonwebtoken string
                const userCookie = jwt.sign(
                    { _id: newUser._id, email: newUser.email }, //cookie payload for browser
                    secret, //this will be used as a key to verify cookie creation (jwt sign)
                    { expiresIn: '2h' } //browser will clear the cookie after two hours
                )
                
                res
                    .status(201)
                    .cookie(
                        'userCookie',
                        userCookie,
                        { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }) //sets to 72million seconds for cookie age
                    .json(newUser) //succesful creation of user and cookie
            }
        }
        catch (err) { //bad request
            res.status(400).json({message: "Something went wrong", error: err}) 
        }
    },

    logout: (req, res) => {
    
        res.clearCookie('userCookie');
        res.sendStatus(200);
    },

    isLoggedIn: (req, res) => {
        
        const userCookie = req.cookies.userCookie;
        if (userCookie === undefined) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        jwt.verify(userCookie, secret, (err, payload) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            // if we made it this far, the token decoded correctly and we can return the user object
            
            res.json(payload);
        });
    },
    
    loginUser: async (req, res) => {
        try {
            //check if user exists
            const user = await User.findOne({ email: req.body.email })
            if (user) { //waits for user variable
                //check to see if password entered matches password in DB
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                if (passwordsMatch) { //they match!
                    //generate the userCookie
                    const userCookie = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: '2h' })
                    //log the user in
                    res.status(201).cookie('userCookie', userCookie, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).json(user)
                }
                else { //passwords don't match but email does
                    res.status(400).json({ message: "Invalid email/password combination" })
                }
            }
            //if user does not exist
            else {
                res.status(400).json({ message: "Invalid email/password combination" })
            }
        }
        catch (err) {
            res.status(400).json(err) //differs from Caden's
        }
    },

    getAll: (req, res) => {
        User.find()     
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => res.json(user))
            .catch(err => res.json(err));
    }

}


