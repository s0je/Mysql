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

////////////////////////////////////////Crear Tablas

let sql = "CREATE TABLE students (id_student INT AUTO_INCREMENT PRIMARY KEY ,first_name VARCHAR(12) ,last_name VARCHAR(45), group_id INT)"

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

let sql = "CREATE TABLE teachers (id_teacher INT AUTO_INCREMENT PRIMARY KEY ,first_name VARCHAR(45) ,last_name VARCHAR(45) ,subjects VARCHAR(45))";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

let sql = "CREATE TABLE subjects_teacher (subject_id INT ,teacher_id INT ,group_id INT)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

let sql = "CREATE TABLE marks (mark_id INT AUTO_INCREMENT PRIMARY KEY ,student_id INT, subject_id INT, date DATE , mark INT)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

let sql = "CREATE TABLE groups (group_id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(45))";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

let sql = "CREATE TABLE subjects (subject_id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(45))";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

let sql = "CREATE TABLE subjects (subject_id INT AUTO_INCREMENT PRIMARY KEY,title VARCHAR(45))";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Tabla creada");
        console.log(result);
    }
})

//Insertar datos en tabla Grupo

let sql = "INSERT INTO groups (group_id, name) VALUES (1, Grupo A)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (2, Grupo B)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (3, Grupo C)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (4, Grupo D)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (5, Grupo F)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (6, Grupo G)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (7, Grupo H)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (8, Grupo I)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (9, Grupo J)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sql = "INSERT INTO groups (group_id, name) VALUES (10, Grupo K)";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})


let sqlMarks = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES ?";

let valuesMarks = [['1', '1', '1', '2003-12-31', '8'],
                ['2', '2', '2', '2018-08-15', '4'],
                ['3', '3', '3', '2020-01-01', '6'],
                ['4', '4', '4', '2000-06-20', '3'],
                ['5', '5', '5', '2011-09-11', '5'],
                ['6', '6', '6', '2015-04-11', '7'],
                ['7', '7', '7', '1999-01-12', '1'],
                ['8', '8', '8', '1990-07-03', '5'],
                ['9',' 9', '9', '2021-10-20', '8'],
                ['10', '10', '10', '2010-03-04', '10']];

connection.query(sqlMarks, [valuesMarks], function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sqlStudents = "INSERT INTO students (student_id, first_name, last_name, group_id) VALUES ?";

let valueStudent = [['1', 'Juan', 'Perez' , '1'],
                    ['2', 'Jose', 'Garcia', '2'],
                    ['3', 'Jacinto','Domínguez', '3'],
                    ['4', 'Jesus', 'Cervantes', '4'],
                    ['5', 'Javier', 'Reyes', '5'],
                    ['6', 'Julia', 'de Vega​​', '6'],
                    ['7', 'Judith', 'de Quevedo', '7'],
                    ['8', 'Jimena', 'Machado', '8'],
                    ['9', 'Jonas', 'Fuertes', '9'],
                    ['10', 'Janet', 'Pineda', '10']];

connection.query(sqlStudents, [valueStudent], function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sqlSubjecTeacher = "INSERT INTO subject_teacher (subjectr_id, teacher_id, last_name) VALUES ?";

let valueSubjecTeacher =[['1', '10', '10'],
                        ['2', '9', '2'],
                        ['3', '8', '3'],
                        ['4', '7', '4'],
                        ['5', '6', '5'],
                        ['6', '5', '6'],
                        ['7', '4', '7'],
                        ['8', '3', '8'],
                        ['9', '2', '9'],
                        ['10', '1', '1']];

connection.query(sqlSubjecTeacher, [valueSubjecTeacher], function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sqlSubject = "INSERT INTO subjects (subject_id, title) VALUES ?";

let valueSubject = [['1', 'Matematicas'],
                    ['2', 'Literatura'],
                    ['3', 'Lengua'],
                    ['4', 'Quimica'],
                    ['5', 'Fisica'],
                    ['6', 'Ed. Fisica'],
                    ['7', 'Ingles'],
                    ['8', 'Frances'],
                    ['9', 'Historia'],
                    ['10', 'Geografia']];

connection.query(sqlSubject, [valueSubject], function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

let sqlTeacher = "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES ?";

let valueTeacher = [['1', 'Ana', 'Alvarez'],
                    ['2', 'Adolfo', 'Aguirre'],
                    ['3', 'Alba', 'Aguilar'],
                    ['4', 'Angeles', 'Aguilera'],
                    ['5', 'Antonio', 'Benitez'],
                    ['6', 'Aitor', 'Munoz'],
                    ['7', 'Agata', 'Gomez'],
                    ['8', 'Alvaro', 'Lopez'],
                    ['9', 'Abel', 'Garcia'],
                    ['10', 'Almudena', 'Silva']];

connection.query(sqlTeacher, [valueTeacher], function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

///////////////////////////////////////////SETEAR TODAS LAS NOTAS A 0

let sqlUpdate = "UPDATE marks SET mark=0";

connection.query(sqlUpdate, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Datos añadidos");
        console.log(result);
    }
})

//////////////////////////////////////////MOSTRAR NOMBRE Y APELLIDO ALUMNOS

let sql = "SELECT first_name, last_name FROM students";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Nombre y apellido de los alumnos.");
        console.log(result);
    }
})

//////////////////////////////////////MOSTRAR DATOS PROFESORES

let sql = "SELECT * FROM teachers";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Nombre y apellido de los alumnos.");
        console.log(result);
    }
})

///////////////////////////////////DELETE DATOS

let sql = "DELETE FROM marks WHERE date > '2012-01-01'";


connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Borrado de notas");
        console.log(result);
    }
})

/////////////////////////////////UPDATE NOTAS

let sql = "UPDATE marks SET mark = 5 WHERE mark <5";

connection.query(sql, function(err, result)
{
    if (err)
        console.log(err);
    else
    {
        console.log("Borrado de notas");
        console.log(result);
    }
})

connection.end();