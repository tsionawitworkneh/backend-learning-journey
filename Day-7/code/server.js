const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Day 7 - Express.js 🚀");
});

app.get("/about", (req, res) => {
  res.send("About page using Express");
});

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Backend Learner",
    day: 7
  });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
