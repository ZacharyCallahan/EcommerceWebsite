const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://groovygear:9jUS0Y9p2pfGJ3II@groovygear.gm99cr5.mongodb.net/groovygear", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));



