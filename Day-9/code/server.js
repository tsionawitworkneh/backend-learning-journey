const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory database
let users = [
  { id: 1, name: "Kebron", age: 21 }
];

// READ all users
app.get("/users", (req, res) => {
  res.json(users);
});

// READ single user
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// CREATE user
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
