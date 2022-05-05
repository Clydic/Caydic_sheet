const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route

// parse requests of content-type - application/json
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Clydic application." });
});
require("./routes/competences.routes");
// set port, listen for requests
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
});
module.exports = app;