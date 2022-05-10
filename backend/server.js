const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
var corsOptions = {
    origin: "http://localhost:8080"

};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
require("./routes/competences.routes")(app);
require("./routes/armes.routes")(app);

// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
});