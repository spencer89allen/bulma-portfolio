var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());


var Port = 4546;

app.listen(Port, () => {
    console.log(`The server is listening on port ${Port}`)
});