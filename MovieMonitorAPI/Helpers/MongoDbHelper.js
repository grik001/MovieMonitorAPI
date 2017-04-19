var url = 'mongodb://localhost:27017/LoggingDB';
var MongoClient = require('mongodb').MongoClient

module.exports =
    {
        Get: function () {
        },

        Insert: function (collectionName, obj) {
            MongoClient.connect(url).then((db) => {
                var collection = db.collection(collectionName);
                collection.insert(obj);
                db.close();
            }).catch(err => { console.log(err) });
        }
    };