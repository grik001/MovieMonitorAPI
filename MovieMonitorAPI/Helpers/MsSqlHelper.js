const sql = require('mssql')
var logging = require('../Helpers/LoggerHelper.js');

//SqlConnection Open
const config = {
    user: 'dev',
    password: '123',
    server: 'DESKTOP-AFPM7GO', // You can use 'localhost\\instance' to connect to named instance 
    database: 'MovieMonitor',
    options: {
        trustedConnection: true,
        encrypt: false
    }
}

sql.connect(config);

module.exports =
    {
        ExecuteQuery: function (queryScript, params) {
            var request = new sql.Request();

            for (var x = 0; x < params.length; x++) {
                request.input(params[x].name, params[x].type, params[x].value);
            }

            return request.query(queryScript).catch(err => {
                logging.AddLog("ERROR", `MsSqlHelper Execute Query threw and error for : ${token} - err ${err}`);
                console.log(err)
            });
        }
    };