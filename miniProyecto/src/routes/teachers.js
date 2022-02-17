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
                sql = "SELECT * FROM teachers";
            else
                sql = "SELECT * FROM teachers WHERE teacher_id= ?";

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

//////POST Profesor

router.post("/", 
        function(request, response)
        {
            let nombre = request.body.name;
            let apellido= request.body.apellido;
            let params = [nombre,apellido]
            let sql = "INSERT INTO teachers (first_name, last_name) VALUES ?;";
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


////// PUT Profesor

router.get("/", 
        function(request, response)
        {
            console.log(request.body)
            let id =  request.body.id;
            let nombre = request.body.name;
            let apellido= request.body.apellido;
            let params = [nombre,apellido,id]
            let sql = `UPDATE teachers SET first_name = COALESCE(?, first_name),
                        last_name = COALESCE(?, last_name)
                        WHERE teacher_id = ?`;
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
                let sql = "DELETE FROM teachers WHERE teacher_id = ?";
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