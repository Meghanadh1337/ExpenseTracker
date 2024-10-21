const express = require('express');
const { 
  addExpense, 
  getUserExpenses, 
  getOverallExpenses 
} = require('../controllers/expenseController');
const { 
  getBalanceSheet 
} = require('../controllers/balanceSheetController'); // Import the balance sheet controller
const { validateExpense } = require('../middleware/validationMiddleware');

const router = express.Router();

// Route to add a new expense with validation
router.post('/', validateExpense, addExpense);

// Route to get expenses for a specific user
router.get('/user/:userId', getUserExpenses);

// Route to get overall expenses for all users
router.get('/', getOverallExpenses);

// Route to get balance sheet
router.get('/balance-sheet', getBalanceSheet); // Add the balance sheet route

module.exports = router;
