var sqlHelper = require('../Helpers/MsSqlHelper.js');

var sql = require('mssql');

module.exports =
    {
        Get: function () {
            return sqlHelper.ExecuteQuery("SELECT [ID], [EntryTime], [Name], [Year], [Rating], [ImageUrl] FROM Movie ORDER BY [DateUploaded]", []);
        },

        GetByID: function (id) {
            var params = [{ name: "ID", type: sql.VarChar, value: id }];
            return sqlHelper.ExecuteQuery("SELECT * FROM Movie WHERE ID = @ID", params);
        }
    };