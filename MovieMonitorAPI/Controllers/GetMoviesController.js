var movieData = require('../Data/MovieDataModel.js');
var logging = require('../Helpers/LoggerHelper.js');

module.exports =
    {
        GetMovies: function (token) {
            var response = { Movies: null, TotalMovies: 0, IsValid: true, Error: null };
            logging.AddLog("INFO", `Retreiving all movies for ${token}`);

            return movieData.Get().then(data => {
                response.Movies = data.recordset;
                response.TotalMovies = data.recordset.length;
                response.IsValid = true;

                logging.AddLog("INFO", `All movies retreived totalFound : ${response.TotalMovies} for ${token}`);
                return response;

            }).catch(err => {
                logging.AddLog("ERROR", `Error thrown during processing of GetMovies Complete for ${token}`);

                response.IsValid = false;
                response.Error = err;
                return response
            });
        },

        GetMovie: function (id, token) {
            var response = { Movies: null, TotalMovies: 0, IsValid: true, Error: null };
            logging.AddLog("INFO", `Retreiving movie by id : ${id} for ${token}`);

            return movieData.GetByID(id).then(data => {
                response.Movies = data.recordset;
                response.TotalMovies = data.recordset.length;
                response.IsValid = true;

                logging.AddLog("INFO", `Movie by id : ${id} totalFound : ${response.TotalMovies} for ${token}`);
                return response;

            }).catch(err => {
                logging.AddLog("ERROR", `Error thrown during processing of GetMovies Complete for ${token}`);

                response.IsValid = false;
                response.Error = err;
                return response
            });
        }
    };