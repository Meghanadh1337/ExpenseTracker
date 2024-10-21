const userService = require('../services/userService');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { email, name, mobile } = req.body;
    const user = await userService.createUserService({ email, name, mobile });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve user details
exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUserByIdService(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
