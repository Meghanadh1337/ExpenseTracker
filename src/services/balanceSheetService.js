// src/services/balanceSheetService.js
const Expense = require('../models/expenseModel');

exports.getBalanceSheetService = async () => {
  const expenses = await Expense.find();
  
  // Logic to summarize expenses per user
  const balanceSheet = {};

  expenses.forEach(expense => {
    expense.participants.forEach(participant => {
      if (!balanceSheet[participant.userId]) {
        balanceSheet[participant.userId] = 0;
      }
      balanceSheet[participant.userId] += participant.amountOwed;
    });
  });

  return balanceSheet;
};
