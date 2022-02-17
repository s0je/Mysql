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

// let param= ['prestamo'];

// let sql = `SELECT ub.tipo, pr.fecha_devo, du.nombre, du.apellido, email FROM pieza AS p
// JOIN propiedad AS pr ON (p.propiedad_id = pr.id_prestamo)
// JOIN ubicacion AS ub ON ( p.ubicacion_id = ub.id)
// JOIN dueño AS du ON (du.id_dueño = p.dueño)
// WHERE pr.tipo = ?`

// connection.query(sql, [param], function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Operacion exitosa");
//         console.log(result);
//     }
// })

let param= [];

let sql = `SELECT p.id_pieza, COUNT(*)AS total FROM pieza AS p
JOIN coleccion AS c ON (p.coleccion_id = c.id_exposicion)
GROUP BY c.tipo
ORDER BY total DESC`

connection.query(sql, [param], function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Operacion exitosa");
        console.log(result);
    }
})


connection.end();