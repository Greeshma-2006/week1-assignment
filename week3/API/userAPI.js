import express from "express";

var app = express.Router();

// users data
var users = [];

// get all users
app.get("/users", function (req, res) {
  res.json({ message: "All users", payload: users });
});

// create user
app.post("/users", function (req, res) {
  users.push(req.body);
  res.status(201).json({ message: "User created", payload: req.body });
});

// get user by id
app.get("/users/:id", function (req, res) {
  var u = users.find(x => x.id == req.params.id);
  u
    ? res.json({ message: "User found", payload: u })
    : res.status(404).json({ message: "User not found" });
});

// update user
app.put("/users/:id", function (req, res) {
  var i = users.findIndex(x => x.id == req.params.id);
  i != -1 &&
    (req.body.id = req.params.id,
     users[i] = req.body,
     res.json({ message: "User updated", payload: req.body }));
  i == -1 && res.status(404).json({ message: "User not found" });
});

// delete user
app.delete("/users/:id", function (req, res) {
  var i = users.findIndex(x => x.id == req.params.id);
  i != -1 &&
    res.json({ message: "User deleted", payload: users.splice(i,1)[0] });
  i == -1 && res.status(404).json({ message: "User not found" });
});

export default app;
