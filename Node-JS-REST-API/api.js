
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// PUT (update) a user by ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  users[id] = req.body;
  res.json(users[id]);
});

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const deletedUser = users.splice(id, 1);
  res.json(deletedUser);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
