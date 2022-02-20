let express = require("express");
let mysql = require("mysql2");

let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Xopsuey2086_",
        database: "proyecto"
    });

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correcta.');
    }
});

module.exports = connection;