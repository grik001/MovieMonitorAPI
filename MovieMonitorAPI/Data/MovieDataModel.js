var sqlHelper = require('../Helpers/MsSqlHelper.js');


module.exports =
    {
        Get: function (queryScript) {
            return sqlHelper.ExecuteQuery("SELECT Name FROM Movie");
        }
    };