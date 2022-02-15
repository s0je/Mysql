let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Xopsuey2086_",
        database: "codenotch"
    });

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correcta.');
    }
});
let sql = "ALTER TABLE tabla_prueba ADD info VARCHAR(100);";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Columna añadida");
        console.log(result);
    }
});

let sql = "ALTER TABLE tabla_prueba DROP info;";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Columna borrar");
        console.log(result);
    }
});

let sql = "DROP TABLE tabla_prueba";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla borrada");
        console.log(result);
    }
})



connection.end();