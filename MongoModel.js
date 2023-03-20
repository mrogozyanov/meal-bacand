const mongoose = require('mongoose');

const mealShema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mongp', mealShema)