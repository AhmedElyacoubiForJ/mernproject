const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000

const UserModel = require("./models/Users");

// Connect to database
connectDB();


const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the User Info. API"});
});

app.get("/users", async (req, res) => {
    const users = await UserModel.find()
    res.json(users);
});

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
});