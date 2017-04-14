//3rd Party
var express = require('express');

//Custom Requires
var movies = require('./Controllers/Movies.js');

//Start
var app = express();

app.listen(3000, function () {
    console.log("Listening on port 3000...");
});

//Movies
app.get('/api/movies', function (request, response) {
    var values = movies.GetMovies();
    response.send(values);
});


