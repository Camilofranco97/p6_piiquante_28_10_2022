const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/sauces", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({ message: "objet créé!" });
});
app.get("/api/sauces", (req, res, next) => {
  const sauces = {
    userId: "jiji25",
    name: "piri piri",
    manufacturer: "lidl",
    description: "sauce piquante",
  };
  res.status(200).json(sauces);
  next();
});

module.exports = app;