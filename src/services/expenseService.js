const mongoose = require('mongoose');
const Expense = require('../models/expenseModel');

// Add a new expense
exports.addExpenseService = async (expenseData) => {
  try {
    // Log the incoming expense data
    console.log('Adding expense:', expenseData);
    
    // Validate participants' userIds
    expenseData.participants.forEach(participant => {
      if (!mongoose.Types.ObjectId.isValid(participant.userId)) {
        throw new Error(`Invalid userId: ${participant.userId}`);
      }
    });

    const expense = new Expense(expenseData);
    return await expense.save();
  } catch (error) {
    console.error('Error adding expense:', error.message);
    throw error; // Rethrow the error to handle it in the controller
  }
};

// Retrieve expenses for a specific user
exports.getUserExpensesService = async (userId) => {
  try {
    // Log the userId being queried
    console.log('Retrieving expenses for userId:', userId);
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error(`Invalid userId: ${userId}`);
    }
    
    return await Expense.find({ 'participants.userId': userId });
  } catch (error) {
    console.error('Error retrieving user expenses:', error.message);
    throw error; // Rethrow the error to handle it in the controller
  }
};

// Retrieve overall expenses
exports.getOverallExpensesService = async () => {
  try {
    console.log('Retrieving overall expenses');
    return await Expense.find();
  } catch (error) {
    console.error('Error retrieving overall expenses:', error.message);
    throw error; // Rethrow the error to handle it in the controller
  }
};




