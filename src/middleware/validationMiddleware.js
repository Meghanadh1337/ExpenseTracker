const { body, validationResult } = require('express-validator');

// Validation for user creation
exports.validateUser = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('name').notEmpty().withMessage('Name is required'),
  body('mobile').isMobilePhone().withMessage('Invalid mobile number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for expense addition
exports.validateExpense = [
  body('amount').isNumeric().withMessage('Amount must be a number'),
  body('participants').isArray().withMessage('Participants must be an array'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
