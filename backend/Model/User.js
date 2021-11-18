const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 3,
        max: 200
    },

    email: {
        type: String,
        required: true,
        min: 6,
        max: 50
    },

    password: {
        type: String,
        required: false,
        min: 6,
        max: 1200
    },

    date :{
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('User', userSchema);