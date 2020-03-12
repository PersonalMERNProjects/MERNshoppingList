const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')


//User Model
const User = require('../../models/User')

//@route POST api/auth
//@desc Authenticate/login user
//@access Public

router.post('/', (req, res) => {
    const { email, password } = req.body;

    //simple validation
    if ( !email || !password) {

        return res.status(400).json({
            message: 'please enter all fields',
            status_code: 400
        })
    }

    //existing user

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(400).json({
                    message: 'user does not exist',
                    status_code: 400
                })
            }

            // validate Password
            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if (!isMatch) {
                        return res.status(400).json({
                            message: 'Invalid Credentials',
                            status_code: 400
                    })
                    }

                    // jwt validation
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
                                    email: user.email,
                                    "name": user.name,
                                    register_date: user.register_date,
                                },
                                message: 'Login Successful',
                                status_code: 200
                            })
                        }
                    )
                    

            })
            
        })
        .catch((eror) => {
            console.log(error)
        })
});

//@route POST api/auth/user
//@desc Get a user
//@access Private

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then((user) => res.json(user))
})

module.exports = router;  