const express = require('express');
const app = express();
const router = require('./MongoRouter');
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

const PORT = 7000 || process.env.port;

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGOOB_LINK);

app.use(router)


app.listen(PORT, () => {
    console.log('Go')
})

// password: UItc36JM3fZvcoVf, name: mrogozyanov