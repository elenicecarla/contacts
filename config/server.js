var express = require ('express')
var consign = require ('consign')
var bodyParser = require('body-parser')
var app = express();
var mysql = require('mysql')
var connection = require('express-myconnection');

app.set('view engine', 'ejs');
app.set('views', "./app/views");

app.use(
   connection(mysql,{
     host: 'localhost',
     user: 'root',
     password : '1234',
     port : 3306, //port mysql
     database:'agenda'
   },'request')
);

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.use('/contatos', require('./../app/api/api.js'));

consign().include('app/routes').into(app);

module.exports = app;