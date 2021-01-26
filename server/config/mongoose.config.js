const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost/petShelter_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected with mongoose"))
    .catch(err => console.log("couldn't connect to mongoose", err))