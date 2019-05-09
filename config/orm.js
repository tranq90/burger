var connection = require("../config/connection.js");

var orm = {
    selectAll: function(asd, cb){
        var queryString = "";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },

    insertOne: function(asd, cb){
        var queryString = "";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function(asd, cb){
        var queryString = "";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;