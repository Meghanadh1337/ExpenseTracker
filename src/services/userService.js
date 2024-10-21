const User = require('../models/userModel');

// Create a new user
exports.createUserService = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// Get user by ID
exports.getUserByIdService = async (userId) => {
  return await User.findById(userId);
};
