const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
