var mysql = require("mysql")

var connectionMySQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'agenda'
    });
}

module.exports = function(){
    return connectionMySQL;
}