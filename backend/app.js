const express = require('express');
const bodyParser = require("body-parser");
//const cors = require("cors");
const app = express();
const competenceRoutes = require("./routes/competences.route");
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// parse requests of content-type - application/json
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Clydic application." });
});
// set port, listen for requests
const db = require("./models");
app.use('/api/competences', competenceRoutes);
module.exports = app;