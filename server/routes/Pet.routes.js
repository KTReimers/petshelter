const PetController = require("../controllers/Pet.controllers");

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.get("/api/pets/:_id", PetController.findOne);
    app.post("/api/pets/new", PetController.createPet);
    app.delete("/api/pets/delete/:_id", PetController.deletePet);
    app.put("/api/pets/update/:_id", PetController.updatePet);
}