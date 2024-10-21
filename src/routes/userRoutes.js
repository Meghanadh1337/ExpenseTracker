const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const { validateUser } = require('../middleware/validationMiddleware');

const router = express.Router();

// Route to create a new user with validation
router.post('/', validateUser, createUser);

// Route to get user details by ID
router.get('/:id', getUser);

module.exports = router;
