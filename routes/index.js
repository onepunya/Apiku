const express = require('express');
const router = express.Router();

router.get('/api/data', (req, res) => {
  res.json({ data: 'Sample data' });
});

router.post('/api/user', (req, res) => {
  res.status(201).json({ message: 'User created successfully' });
});

router.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ username: 'john_doe', email: 'john@example.com' });
});

module.exports = router;