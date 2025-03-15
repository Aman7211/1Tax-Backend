const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/UserController')

// Login new users
router.post('/login',login);

// Register new users
router.post('/register',register);


module.exports = router;
