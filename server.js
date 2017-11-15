var express = require('express');
var bodyParser = require('bodyParser');

//creating server
var app = express();

//set port
var PORT = process.env.PORT || 5000;

//use body Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set route

require("./app/routing/apiRoutes.js")
require("./app/routing/htmlRoutes.js")

//listener

app.listen(PORT, function(){
	console.log("listening Port " + PORT)
});