const mongoose = require('mongoose');
//This will create a database named "person" if one doesn't already exist (no need for mongo shell!):
mongoose.connect("mongodb+srv://groovygear:9jUS0Y9p2pfGJ3II@groovygear.gm99cr5.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


var axios = require('axios');
var data = JSON.stringify({
    "collection": "clothing",
    "database": "groovygear",
    "dataSource": "GroovyGear",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ngzog/endpoint/data/v1/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '5pIg0B0Ar5xWByjzHm6CgmZhDIlpXyUm9uvx4fWSTRTJQTx7LtYirxm5VzQMBBmj',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
