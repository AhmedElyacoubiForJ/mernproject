const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const UserModel = require("./models/Users");

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the User Info. API" });
});

// get users request
app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

// create user
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
