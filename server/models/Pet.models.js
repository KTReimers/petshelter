const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet Name is Required"],
        minlength: [3, "Pet Name must be at least 3 characters long"]
    },
    petType: {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Pet Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps:true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;