const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    username: String,
    hobby: String
})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;