const express = require('express');
const router = express.Router();
const db = require('./models');

// POST route to register user and address
router.post('/register', async (req, res) => {
  const { name, address } = req.body;
  try {
    const user = await db.User.create({ name });
    await db.Address.create({ address, userId: user.id });
    res.status(201).send('User and address registered successfully!');
  } catch (error) {
    res.status(500).send('Error occurred while registering user and address');
  }
});

module.exports = router;
