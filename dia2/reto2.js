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

/////////////////OBTENER ID Y NOTA

// let sql = "SELECT student_id,mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date BETWEEN '2021-01-01' AND '2021-12-31')"

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Consulta hecha");
//         console.log(result);
//     }
// })
//////////////////////////////////////Nota media rango de fecha
// let sql = "SELECT AVG(mark) AS nota_media FROM marks WHERE date BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY subject_id"

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Consulta hecha");
//         console.log(result);
//     }
// })

///////////////////////////////////MEDIA ARITMETICA

// let sql = "SELECT AVG(mark) AS media FROM marks WHERE date BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY student_id"

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Consulta hecha");
//         console.log(result);
//     }
// })


connection.end();