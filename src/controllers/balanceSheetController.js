const Expense = require('../models/expenseModel');
const xlsx = require('xlsx');

exports.getBalanceSheet = async (req, res) => {
  try {
    // Fetch all expenses (modify as needed for your specific requirements)
    const expenses = await Expense.find();

    // Process data to create balance sheet format
    const balanceSheetData = expenses.map(expense => ({
      Amount: expense.amount,
      Participants: expense.participants.map(participant => participant.userId).join(', '),
      CreatedAt: expense.createdAt.toISOString().split('T')[0] // Format date
    }));

    // Create a new workbook and a new worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(balanceSheetData);

    // Append the worksheet to the workbook
    xlsx.utils.book_append_sheet(wb, ws, 'Balance Sheet');

    // Set response headers for file download
    res.setHeader('Content-Disposition', 'attachment; filename=balance_sheet.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    // Write the workbook to the response
    xlsx.writeFile(wb, 'balance_sheet.xlsx', { bookType: 'xlsx', type: 'buffer' });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
