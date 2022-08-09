const express = require("express");
const app = express();

// Main End-point
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

// oi End-point
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

app.listen(3000);
