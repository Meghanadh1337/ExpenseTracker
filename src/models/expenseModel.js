const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  amountOwed: {
    type: Number,
    required: true,
  },
});

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  participants: [participantSchema],
  splitMethod: {
    type: String,
    enum: ['equal', 'exact', 'percentage'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
