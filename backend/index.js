const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const PORT = 9999;

// Importing Routes/auth.js So we can Use GET & POST
const authRoutes = require('./Routes/auth.js');

//Connection to MongoDB Atlas
mongoose.connect(process.env.DB_CONNECT, () => { console.log(' Connected to MongoDB Atlas ')});

////Middleware
app.use(express.json());

// Sending Request to auth.js
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));