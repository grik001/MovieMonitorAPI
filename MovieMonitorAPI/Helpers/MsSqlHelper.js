const sql = require('mssql')

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

sql.connect(config).then(
    result => {
        console.log("connected");
    },
    err => {
        console.log("connection failed");
    });

module.exports =
    {
        ExecuteQuery: function (queryScript) {
            return new sql.Request().query(queryScript).catch(err => { console.log(err) });
        }
    };