module.exports = app => {
    const competences = require("../controllers/competences.controller.js");
    var router = require("express").Router();
    //Create a new Competence
    router.post("/".competences.create);
    //Retrieve all Competence
    router.get("/".competences.finAll);
    //Retrieve one Competence
    router.get("/:id", competences.findOne);
    // Update a Competence
    router.put("/id:", competences.update);
    // Delete a Competence
    router.delete("/:id", competences.delete);
    // Delete all Competence
    router.delete("/", competences.deleteAll);
    app.use('/api/competences', router);
}