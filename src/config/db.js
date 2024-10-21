// src/config/db.js
require('dotenv').config(); // This should be at the very top

const mongoose = require('mongoose');

// MongoDB connection string
const dbURI = process.env.MONGODB_URI; // This line accesses the process variable

const connectDB = async () => {
    try {
      await mongoose.connect(dbURI); // Removed the deprecated options
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit the process with failure
    }
  };
  

module.exports = connectDB;

