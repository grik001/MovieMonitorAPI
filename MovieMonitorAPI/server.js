//3rd Party
var express = require('express');
const uuidV4 = require('uuid/v4');

//Custom Requires
var movies = require('./Controllers/GetMoviesController.js');
var logging = require('./Helpers/LoggerHelper.js');

const sql = require('mssql')

//Start
var app = express();

app.listen(3000, function () {
    console.log("Listening on port 3000...");
});

//Movies
app.get('/api/movies', function (request, response) {

    var token = uuidV4();

    try {
        logging.AddLog("INFO", `Request: GetMovies ${token}`);
        movies.GetMovies(token).then(data => { response.send(data) }).catch(err => { console.log(err) });
        logging.AddLog("INFO", `Request Complete: GetMovies ${token}`);
    }
    catch (err) {
        var message = `${token} : ${err}`;
        logging.AddLog("ERROR", `${token} : ${err}`);
        console.log(message);
    }
});

app.get('/api/movies/:id', function (request, response) {

    var token = uuidV4();

    try {
        logging.AddLog("INFO", `Request: GetMovie ${token}`);
        var id = request.params.id;
        movies.GetMovie(id, token).then(data => { response.send(data) }).catch(err => { console.log(err) });
        logging.AddLog("INFO", `Request Complete: GetMovies ${token}`);
    }
    catch (err) {
        var message = `${token} : ${err}`;
        logging.AddLog("ERROR", `${token} : ${err}`);
        console.log(message);
    }
});