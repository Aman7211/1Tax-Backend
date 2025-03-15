const express = require('express');
const router = express.Router();
const { formregister, getallForm, getFormById } = require('../controllers/FormController');

// Route to register a new form (POST)
router.post('/register', formregister);

// Route to get all forms (GET)
router.get('/all', getallForm);

// Route to get a specific form by manually assigned ID (GET)
router.get('/:id', getFormById);

module.exports = router;
