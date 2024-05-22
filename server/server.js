// console.log("Server Starting...")
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World, from node express server");
});

app.get("/users", (req, res) => {
    res.send("<h1>users</h1>");
});

app.listen("3001", ()=> {
    console.log("Server Running...");
});