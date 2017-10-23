var mongoHelper = require('../Helpers/MongoDbHelper.js');

module.exports =
    {
        AddLog: function (type, message) {
            var obj = { Message: message, EntryTime: new Date() , LogType : type, System : "MovieMonitorAPI" };
            mongoHelper.Insert("Logs", obj);
        }
    };
