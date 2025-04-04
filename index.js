const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User.model");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/Users", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
});

app.get("/api/Users", async (req, res) => {
  const Users = await User.find();
      res.send(users);
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

mongoose
  .connect(
    "mongodb+srv://Shukrah:SHadie@cluster0.ck5nl.mongodb.net/UserInfo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
