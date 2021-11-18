const router = require('express').Router();
const User = require('../Model/User');
const bcrypt = require('bcrypt');
//const jwt = require('jasonwebtoken');
const { registerValidation, loginValidation } = require('./validation.js');

//Validations for User Inputs 
const Joi = require('@hapi/joi');

const schema = {

    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()

};

//Register

router.post('/register', async (req, res) => {

    //Validate The Data of User   
    const { error } = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    // Here We Can check If User Exist in DataBase.

    const emailExist = await User.findOne({ email: req.body.email });
    if (!emailExist) return res.status(400).send('Email Already Exist');

    //Hash Passwords

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Here We Create New User

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        date: req.body.date
    });

    //Here We Save The User

    try {
        const savedUser = await user.save();
        //res.send ({user: user._id});
        res.send(savedUser);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

//Login 

router.post('/login', async (req, res) => {

    //Validate The Data of User 

    const { error } = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    // Here We Can check If Email Exist in DataBase.

    const emailExist = await User.findOne({ email: req.body.email });
    if (!emailExist) return res.status(400).send('Email is wrong');

    res.send('LoggedIn-------- Welcome');

    /// Password Validation is Incomplete 

});




module.exports = router;

/*
router.post('/register', async(req, res) => {


    console.log('line 8');
    const user = new User ({
        name :req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch (error){
        res.status(400).send(error);
    }
    res.send ('This is Auth Post');
});
*/