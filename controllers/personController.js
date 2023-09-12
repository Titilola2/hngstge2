const { validationResult } = require('express-validator');
const Person = require('../models/personModel');

// Create a new person
exports.createPerson = async (req, res) => {
  try {
    // Count the existing documents to calculate the next ID
    const count = await Person.countDocuments();
    const newId = count + 1;

    // Create a new person with the custom integer ID
    const newPerson = new Person({
      id: newId,
      name: req.body.name,
    });

    const savedPerson = await newPerson.save();

    // Removing the "_id" and "__v" fields from the response
    const formattedPerson = {
      id: savedPerson.id,
      name: savedPerson.name,
    };

    res.status(201).json(formattedPerson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fetch details of person by ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findOne({ id: req.params.id });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Customizing the response format
    const formattedPerson = {
      id: person.id,
      name: person.name,
    };

    res.json(formattedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fetch details of person by name
exports.getPersonByName = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const person = await Person.findOne({ name: req.query.name });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Removing the "_id" and "__v" fields from the response
    const formattedPerson = {
      id: person.id,
      name: person.name,
    };

    res.json(formattedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update details of an existing person by ID
exports.updatePerson = async (req, res) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Removing the "__v" field from the response
    const formattedPerson = {
      id: updatedPerson.id,
      name: updatedPerson.name,
    };

    res.json(formattedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Remove a person by ID
exports.deletePerson = async (req, res) => {
  try {
    const deletedPerson = await Person.findOneAndDelete({ id: req.params.id });
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
