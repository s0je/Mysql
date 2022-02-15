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

/////////////////NOTA Media ASIGNATURA 1

// let sql = "SELECT avg(mark) FROM marks WHERE student_id = 1 ";

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Nota media");
//         console.log(result);
//     }
// })

/////////////////CALCULAR TOTAL DE ALUMNOS

// let sql = "SELECT COUNT(*) FROM students;";

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Numero total de alumnos");
//         console.log(result);
//     }
// })

//////////////////////////////BORRAR NOTA > 5 Y AÑO 2021

// let sql ="DELETE FROM marks WHERE mark > 5 AND date > '2020-12-31' AND date < '2022-01-01'"

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Borrado correcto");
//         console.log(result);
//     }
// })

//////////////////DATOS ESTUDIANTES BOOTCAMP ESTE AÑO

// let sql = "ALTER TABLE students ADD COLUMN (ingreso DATE)"

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Columna añadida");
//         console.log(result);
//     }
// })
////////////////1 UPDATE POR CADA ALUMNO
// let sqlStudents = "UPDATE students SET ingreso = '2020-06-02' WHERE student_id=14";

// connection.query(sqlStudents, function(err, result)
// {
// if (err)
//     console.log(err);
// else
// {
//     console.log("Datos añadidos");
//     console.log(result);
// }
// })

// let sql = "SELECT * FROM students WHERE ingreso BETWEEN '2022-01-01' AND '2022-12-31'"

// connection.query(sql, function(err, result)
// {
//     if (err)
//         console.log(err);
//     else
//     {
//         console.log("Datos mostrados.");
//         console.log(result);
//     }
// })

///////////////////////////////////Calcular numero de profesores por cada asignatura

let sql = "SELECT subject_id, COUNT(teacher_id) AS num_teachers FROM subject_teacher GROUP BY subject_id"

connection.query(sql, function(err, result)
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

