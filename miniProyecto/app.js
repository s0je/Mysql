let express = require("express");
let mysql = require("mysql2");
let app = express();
let cors = require('cors')

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

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/////////GET Alumnos
app.get("/alumnos", 
        function(request, response)
        {
            let id =  request.query.id;
            let indice = document.getElementById("indice").value;
            let params = []
            let sql;
            if (request.query.id == null && indice == '')
                sql = "SELECT * FROM students";
            else if(indice !='')
            {
                params = [indice];
                sql = "SELECT * FROM students WHERE student_id= ?";
            }
            else
            {
                params = [id]
                sql = "SELECT * FROM students WHERE student_id= ?";
            }
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

app.post("/alumnos", 
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
                    if (err) 
                        console.log(err);
                    else 
                    {
                        console.log(result);
                        if(result.insertId)
                            response.send(String(result.insertId));
                        else
                            response.send("-1")
                    }
                }
            })
        }
);


////// PUT Alumnos

app.put("/alumnos", 
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

app.delete("/alumnos",
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


////////ERROR 404
app.use(function(req,res,next)
        {
            respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
            res.status(404).send(respuesta);
        })

app.listen(3000);