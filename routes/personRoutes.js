const express = require('express');
const { body, param, query } = require('express-validator');
const personController = require('../controllers/personController');

const personRoutes = express.Router();

// Create a new person
personRoutes.post('/', personController.createPerson);

// Fetch details of person by ID
personRoutes.get('/:id', personController.getPersonById);

// Fetch details of person by name
personRoutes.get('/', [
    query('name').isString().notEmpty(),
], personController.getPersonByName);

// Update details of an existing person by ID
personRoutes.put('/:id', personController.updatePerson);

// Remove a person by ID
personRoutes.delete('/:id', personController.deletePerson);

module.exports = personRoutes;
