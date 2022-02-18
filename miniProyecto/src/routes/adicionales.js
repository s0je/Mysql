let express = require("express");
const router = express.Router();
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

router.get("/",
        function(request,response)
        {
            let params = [request.query.id]
            let sql = "SELECT AVG(mark) AS nota_media FROM marks WHERE student_id = ?";

            connection.query(sql,[params], function (err, result) 
                {
                    if (err) 
                        console.log(err);
                    else 
                    {
                        response.send(result);
                    }
                })
        }
)

router.get("/",
        function(request,response)
        {
            let id = request.query.id
            let params = [id]
            let sql;
            if(request.query.id == null)
                sql = `SELECT sb.title, s.first_name, s.last_nameFROM subjects AS sb 
                        JOIN subjects_teacher AS st ON (sb.subject_id = st.subject_id)
                        JOIN students AS s ON (st.group_id = s.group_id)`
            else
            let sql = `SELECT sb.title FROM subjects AS sb 
                        JOIN subjects_teacher AS st ON (sb.subject_id = st.subject_id)
                        JOIN students AS s ON (st.group_id = s.group_id)
                        WHERE s.student_id = ?`;
            connection.query(sql,[params], function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    response.send(result);
                }
            })
        }
)

router.get("/",
        function(request,response)
        {
            let id = request.query.id
            let params = [id]
            let sql;
            if(request.query.id == null)
                sql = `SELECT sb.title, t.first_name, t.last_nameFROM subjects AS sb 
                        JOIN subjects_teacher AS st ON (sb.subject_id = st.subject_id)
                        JOIN teachers AS t ON (st.teacher_id = t.teacher_id)`
            else
            let sql = `SELECT sb.title FROM subjects AS sb 
                        JOIN subjects_teacher AS st ON (sb.subject_id = st.subject_id)
                        JOIN teachers AS t ON (st.teacher_id = t.teacher_id)
                        WHERE t.teacher_id = ?`;
            connection.query(sql,[params], function (err, result) 
            {
                if (err) 
                    console.log(err);
                else 
                {
                    response.send(result);
                }
            })
        }
)