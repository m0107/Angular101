const router = require('express').Router();

const { registerValidation, loginValidation } = require('./validation.js');

const schema = require('../joi_models/user');
const User = require('../Model/User');

const bcryptHash = require("../utilities/bcrypt/bcrypt_hash");
const bcryptCompare = require("../utilities/bcrypt/bcrypt_compare");

const signToken = require("../utilities/jwt/sign_token");
const is_authenticated = require("../utilities/jwt/is_authenticated");

/**
 * Register
 */
router.post('/register', async (req, res) => {

    console.log(req.body, "/register body");

    //Validate The Data of User   
    const validation = schema.register.validate(req.body)
    if (validation.error) return res.status(400).send({ "error": validation.error });

    // Here We Can check If User Exist in DataBase.

    const emailExist = await User.findOne({ email: req.body.email });
    // console.log(emailExist, "emailExist");
    if (emailExist) return res.status(400).send({ "error": 'Email Already Exist' });

    const hashedPassword = await bcryptHash(req.body.password);

    //Here We Create New User

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        date: req.body.date
    };

    console.log(user, "user")
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

    console.log(req.body, "/login body");

    const validation = schema.login.validate(req.body)
    if (validation.error) return res.status(400).send({ "error": validation.error });

    // Here We Can check If Email Exist in DataBase.

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is wrong');

    const match = await bcryptCompare(req.body.password, user.password);
    if (!match) {
        res.status(403).send({ message: "error wrong password" });
    } else {
        delete user.password;
        console.log("user -----");
        console.log(user);
        console.log("-------------")
        res.status(200).send({
            message: "signin success",
            token: signToken(user.toJSON()),
            user,
        });
    }
});




router.get('/:email', is_authenticated, async (req, res) => {
    
    console.log(req.params.email);
    if(!req.params.email) return res.status(400).send({error: "no email params found"});

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is wrong');
    else {
        return res.status(200).send(user);
    }
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