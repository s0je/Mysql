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

/////////GET usuarios

router.get("/", 
        function(request, response)
        {
            let id =  request.query.id;
            let params = [id]
            let sql;
            if (request.query.id == null)
                sql = "SELECT * FROM students";
            else
                sql = "SELECT * FROM students WHERE student_id= ?";

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
);

//////POST Alumnos

router.post("/", 
        function(request, response)
        {
            let nombre = request.body.name;
            let apellido= request.body.apellido;
            let grupo = request.body.grupo;
            let params = [nombre,apellido,grupo]
            let sql = "INSERT INTO students (first_name, last_name, group_id) VALUES ?;";
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
);


////// PUT Alumnos

router.get("/", 
        function(request, response)
        {
            console.log(request.body)
            let id =  request.body.id;
            let nombre = request.body.name;
            let apellido= request.body.apellido;
            let grupo = request.body.grupo;
            let params = [nombre,apellido,grupo,id]
            let sql = `UPDATE students SET first_name = COALESCE(?, first_name),
                        last_name = COALESCE(?, last_name),
                        group_id = COALESCE(?, group_id) WHERE student_id = ?`;
            console.log(sql);
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
);

/////// DELETE Alumno

router.delete("/",
            function(request,response)
            {
                console.log(request.body);
                let params = [request.body.id]
                let sql = "DELETE FROM students WHERE studdent_id = ?";
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
);

module.exports = router;