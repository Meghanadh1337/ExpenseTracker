// src/app.js
const express = require('express');
const connectDB = require('./config/db');

// Require the user and expense routes
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes'); // Assuming you have this file set up

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Sample route
app.get('/', (req, res) => {
  res.send('Expense Sharing and Tracking API');
});

// Use user and expense routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes); // Add this line

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
