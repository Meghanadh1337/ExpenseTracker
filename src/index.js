// src/index.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');

// Initialize the app
const app = express();
app.use(express.json()); // Parse JSON requests


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send('Welcome to the Expense Sharing and Tracking app');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
