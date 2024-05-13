require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

const secretKey = process.env.JWT_SECRET; // Should be stored in an environment variable

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, password: hashedPassword, preferences: {} };
    users.push(user);
    res.status(201).send({ message: 'User registered', email });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        { email: user.email, userId: users.indexOf(user) },
        secretKey,
        { expiresIn: '1h' }
      );
      res.status(200).json({ message: 'Auth successful', token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
};
