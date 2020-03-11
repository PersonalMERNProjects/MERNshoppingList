const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')


//User Model
const User = require('../../models/User')

//@route POST api/Users
//@desc Register new Users
//@access Public

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    //simple validation
    if (!name || !email || !password) {

        return res.status(400).json({
            message: 'please enter all fields',
            status_code: 400
        })
    }
 
        //existing user

        User.findOne({ email: email })
            .then((user) => { 
                if (user) { 
                    return res.status(400).json({
                        message: 'user already exist',
                        status_code: 400
                    }) 
                }
                //Create new user if a user does not exist
                const newUser = new User({
                    name,
                    email,
                    password,
                });

                // Create salt & hash for password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            console.log(err)
                        }
                        newUser.password = hash;
                        
                        //Save user to database and return json 
                        newUser.save()
                            .then((user) => {

                                jwt.sign(
                                    { id: user.id },
                                    config.get('jwtSecret'),
                                    { expiresIn: 15780000 },
                                    (err, token) => {
                                        if (err) {
                                            console.log(err);
                                        };
                                        res.status(200).json({
                                            token: token,
                                            user: {
                                                id: user.id,
                                                name: user.name,
                                                email: user.email,
                                                register_date: user.register_date,
                                            },
                                            message: 'Registration Successful',
                                            status_code: 200
                                        })
                                    }
                                )

                            })
                            .catch((error) => {
                            console.log(error)
                        }) 
                    })
                })
            })
            .catch((eror) => {
                console.log(error)
    })
});



//@route GET api/users/all
//@desc Get all Users
//@access Public

router.get('/all', (req, res) => {
    User.find()
        .sort({ register_date: -1 })
        // .select('-password')
        .then((users) => {
            res.status(200).json({
                data: users,
                status: "ok",
                status_code: 200
            })
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: "Query operation failed!",
                status_code: 404

            })
        })
}) 



module.exports = router;