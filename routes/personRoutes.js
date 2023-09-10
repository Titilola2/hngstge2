const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new person
router.post('/persons', personController.createPerson);

// Fetch details of a person by ID
router.get('/persons/:id', personController.getPersonById);

// Fetch details of a person by name
router.get('/persons', personController.getPersonByName);

// Update details of an existing person by ID
router.put('/persons/:id', personController.updatePerson);

// Remove a person by ID
router.delete('/persons/:id', personController.deletePerson);

module.exports = router;