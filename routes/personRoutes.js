const express = require('express');
const { body, param, query } = require('express-validator');
const personController = require('../controllers/personController');

const personRoutes = express.Router();

// Create a new person
personRoutes.post('/person', personController.createPerson);

// Fetch details of person by ID
personRoutes.get('/person/:id', personController.getPersonById);

// Fetch details of person by name
personRoutes.get('/person', [
    query('name').isString().notEmpty(),
], personController.getPersonByName);

// Update details of an existing person by ID
personRoutes.put('/person/:id', personController.updatePerson);

// Remove a person by ID
personRoutes.delete('/person/:id', personController.deletePerson);

module.exports = personRoutes;
