var express = require('express');
var bodyParser = require('body-parser');

//creating server
var app = express();

//set port
var PORT = process.env.PORT || 5000;

//use body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set route

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listener

app.listen(PORT, function(){
	console.log("listening Port " + PORT)
});