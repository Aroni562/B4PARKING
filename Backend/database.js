const mongoose = require("mongoose")

//http://dbUser:0WbakF6cK9tFpEMn@cluster0.yut7l.mongodb.net/Parking4?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://dbUser:0WbakF6cK9tFpEMn@cluster0.yut7l.mongodb.net/mean-parking?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,

})
    .then(db => console.log("db is connected"))
    .catch(err => console.error(err));
