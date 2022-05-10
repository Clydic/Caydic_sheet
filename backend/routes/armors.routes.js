module.exports = app => {
    const armors = require("../controllers/armors.controller.js");
    var router = require("express").Router();
    //Create a new Armor
    router.post("/", armors.create);
    //Retrieve all Armor
    router.get("/", armors.findAll);
    //Retrieve one Armor
    router.get("/:id", armors.findOne);
    // Update a Armor
    router.put("/:id", armors.update);
    // Delete a Armor
    router.delete("/:id", armors.delete);
    // Delete all Armor
    router.delete("/", armors.deleteAll);
    app.use('/character/armors', router);
}