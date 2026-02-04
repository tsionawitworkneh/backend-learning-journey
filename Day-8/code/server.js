const express = require("express");

const app = express();
const PORT = 3000;

/* Middleware */
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next middleware/route
});

/* Routes */

// Query parameter example
// GET /hello?name=Kebron
app.get("/hello", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello ${name}`);
});

// POST request example
app.post("/user", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "Name and age required" });
  }

  res.status(201).json({
    message: "User created",
    user: { name, age }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
