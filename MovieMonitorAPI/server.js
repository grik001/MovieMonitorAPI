//3rd Party
var express = require('express');

//Custom Requires
var movies = require('./Controllers/GetMoviesController.js');
const sql = require('mssql')

//Start
var app = express();

app.listen(3000, function () {
    console.log("Listening on port 3000...");
});

//Movies
app.get('/api/movies', function (request, response) {
    movies.GetMovies().then(data => { response.send(data) }).catch(err => { console.log(err) });
});

