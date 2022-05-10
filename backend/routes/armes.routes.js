module.exports = app => {
    const armes = require("../controllers/armes.controller.js");
    var router = require("express").Router();
    //Create a new Competence
    router.post("/", armes.create);
    //Retrieve all Competence
    router.get("/", armes.findAll);
    //Retrieve one Competence
    router.get("/:id", armes.findOne);
    // Update a Competence
    router.put("/:id", armes.update);
    // Delete a Competence
    router.delete("/:id", armes.delete);
    // Delete all Competence
    router.delete("/", armes.deleteAll);
    app.use('/api/armes', router);
}