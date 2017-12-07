//Dependencies: request-express
var request = require('request');

var express = require('express');

var app = express();

// PORT
var PORT = process.env.PORT || 8080;

// config with ejs
app.set("view engine", "ejs");

// ROUTE(S)
app.get("/", function(req, res) {
	res.render("search");
});

app.get("/request", function(req, res) {
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?i=tt3896198&apikey=cf5fcc4e" + query;
	request(url, function (error, response, body) {
		 if(!error && response.statusCode === 200) {
  		var data = JSON.parse(body); 
  		res.render('results', {data : data});
	   }

	});
});

// SERVER
app.listen(PORT, function() {
  console.log("Server is cooking hot on PORT " + PORT);
});