const Pet = require("../models/Pet.models");


module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({Pets: allPets}))
        .catch(err => res.json({message: "error occured while retrieving all Pets", error: err}))
}

module.exports.findOne = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({onePet: onePet}))
        .catch(err => res.json({message: "error occured while retrieving one Pet", error: err}))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({newPet: newPet}))
        .catch(err => res.json({message: "error occured while adding a new Pet", error: err}))
}

module.exports.deletePet = (req, res) => {
    Pet.remove({_id: req.params._id})
        .then(res.json({message: "Pet was adopted!"}))
        .catch(err => res.json({message: "error occured while adopting a Pet", error: err}))
}

module.exports.updatePet = (req, res) => {
    Pet.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(updatePet => res.json({updatePet: updatePet}))
        .catch(err => res.json({message: "error occured while updating a Pet", error: err}))
}