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

/////////////////////////RETO 1

// let param= [];

// let sql = "SELECT first_name, last_name, title FROM students AS s JOIN marks AS m ON (s.student_id = m.student_id) JOIN subjects AS p ON (p.subject_id = m.subject_id)";

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

///////////////////////////////RETO 2

// let param= [];

// let sql = "SELECT first_name, last_name, title FROM teachers AS t JOIN subject_teacher AS s ON (t.teacher_id = s.teacher_id) JOIN subjects AS p ON (s.subject_id = p.subject_id)";

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

////////////////////////////RETO 3

let param= [];

let sql = `SELECT COUNT(s.student_id) AS total, sub.title, t.first_name, t.last_name FROM students AS s 
JOIN marks AS m ON (s.student_id = m.student_id) 
JOIN subjects AS sub ON (m.subject_id = sub.subject_id)
JOIN subject_teacher AS st ON (sub.subject_id = st.subject_id)
JOIN teachers AS t ON (st.teacher_id = t.teacher_id)
GROUP BY sub.subject_id`;

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