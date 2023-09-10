const Person = require('../models/personModel');

// Create a new person
exports.createPerson = async (req, res) => {try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
} catch (error) {
    res.status(500).json({ error: 'Internal server error' })
}}

// Fetch details of person by ID
exports.getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.prarams.id);
        if(!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(person)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'})
    }
}

//  Fetch detailsof person by name
exports.getPersonByName = async (req, res) => {
    try {
      const person = await Person.findOne({ name: req.query.name });
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Update details of an existing person by ID
exports.updatePerson = async (req, res) => {
    try {
      const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json(updatedPerson);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Remove a person by ID
exports.deletePerson = async (req, res) => {
    try {
      const deletedPerson = await Person.findByIdAndDelete(req.params.id);
      if (!deletedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json({ message: 'Person deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};