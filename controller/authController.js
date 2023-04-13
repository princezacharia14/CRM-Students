const User = require('../model/User');
// Login user controller
const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Validate the user input
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      // Check if the email is registered
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check if the password is correct
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({ message: 'User logged in successfully' });
    } catch (err) {
      next(err);
    }
  };

  module.exports = login;