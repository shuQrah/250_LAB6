const express = require("express");
const mongoose = require("mongoose");
const nodemon = require("nodemon");
const User = require("./models/User.mode");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await user.find();
  res.json(users);
});

app.get("/api/Users", async (req, res) => {
  User.findByName()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
  const user = await User.findByName(req.params.name);
  res.send(user);
});

mongoose
  .connect(
    "mongodb://localhost:27017/mongodb+srv://Shukrah:<SHadie>@cluster0.ck5nl.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
