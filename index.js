// const mysql = require('mysql');

// const con = mysql.createConnection({
// 	host:"localhost",
// 	user:"root",
// 	password:"",
// 	database: "nodedb"
// });
//
// con.connect(function (err){
// 	if (err) throw err;
// 	console.log("connnceted");
// });

//--------data base creat-----

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE nodedb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err){
// 	if (err) throw err;
// 	console.log("connceted");
// 	const sql = "CREATE TABLE students (name VARCHAR(255), roll VARCHAR(255))";
// 	con.query(sql,function(err,result){
// 		if (err) throw err;
// 		console.log("table created");
// 	});
// });

// var http =require ('http');

// http.createServer(function (request,response){
// 	response.writeHead(200,{"content-Type":"text/plain"});
// 	response.end("hellow world");
// }).listen(process.env.PORT);

var mysql = require('mysql');
    port = process.env.PORT || 4205;

if (port === 4205) {

    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'db_name',
        insecureAuth: true
    });
} else {
    // LIVE SERVER
}

connection.connect();

module.exports = connection;