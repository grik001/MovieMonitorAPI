var movieData = require('../Data/MovieDataModel.js');

module.exports =
    {
        GetMovies: function () {
            return movieData.Get().then(data => {
                return data;
            });
        }
    };