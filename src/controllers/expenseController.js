const expenseService = require('../services/expenseService');

// Add a new expense
exports.addExpense = async (req, res) => {
    try {
      const { amount, participants, splitMethod } = req.body;
      const expense = await expenseService.addExpenseService({ amount, participants, splitMethod });
      res.status(201).json({ message: 'Expense added successfully', expense });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Retrieve individual user expenses
exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await expenseService.getUserExpensesService(req.params.userId);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve overall expenses
exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await expenseService.getOverallExpensesService();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
