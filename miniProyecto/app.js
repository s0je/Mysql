let express = require("express");
let mysql = require("mysql2");
let app = express();
let cors = require('cors');
const { append } = require("express/lib/response");

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
            let params = [id]
            let sql;
            if (request.query.id == null)
                sql = "SELECT * FROM students";
            else 
            {
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
            let nombre = request.body.fisrt_name;
            let apellido= request.body.last_name;
            let grupo = request.body.group_id;
            let params = [nombre,apellido,grupo]
            let sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (?);";
            console.log(params);
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
            let id =  request.body.student_id;
            let nombre = request.body.fisrt_name;
            let apellido= request.body.last_name;
            let grupo = request.body.group_id;
            let params = [nombre,apellido,grupo,id]
            let sql = `UPDATE students SET first_name = COALESCE(?, first_name),
                        last_name = COALESCE(?, last_name),
                        group_id = COALESCE(?, group_id) WHERE student_id = ?`;
            console.log(sql);
            connection.query(sql,params, function (err, result) 
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

/////// DELETE Alumno

app.delete("/alumnos",
            function(request,response)
            {
                console.log(request.body);
                let params = [request.body.student_id]
                let sql = "DELETE FROM students WHERE student_id = ?";
                connection.query(sql,[params], function (err, result) 
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
                })

            }
);

//Notas

app.get("/notas", 
        function(request, response)
        {
            let id =  request.query.id;
            let params = [id]
            let sql;
            if (request.query.id == null)
                sql = "SELECT * FROM marks";
            else
                sql = "SELECT * FROM marks WHERE student_id= ?";

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

app.post("/notas",
        function(request, response)
        {
            let alumno = request.body.student_id;
            let asig= request.body.subject_id;
            let fecha = request.body.date;
            let nota = request.body.mark
            let params = [alumno,asig,fecha,nota]
            let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (?);";
            console.log(params);
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
)

app.put("/notas", 
        function(request, response)
        {
            console.log(request.body)
            let student_id =request.body.student_id;
            let subject_id =request.body.subject_id;
            let date=request.body.date;
            let mark=request.body.mark;
            let mark_id=request.body.mark_id;
            let params = [student_id,subject_id,date,mark,mark_id ]
            console.log(params);
            let sql = "UPDATE marks SET  student_id= COALESCE(?, student_id),"+
                        "subject_id = COALESCE(?, subject_id),"+
                        "date = COALESCE(?, date),"+
                        "mark = COALESCE(?, mark)"+
                        "WHERE mark_id = ?";
            console.log(sql);
            connection.query(sql,params, function (err, result) 
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

app.delete("/notas",
            function(request,response)
            {
                console.log(request.body);
                let params = [request.body.mark_id]
                let sql = "DELETE FROM marks WHERE mark_id = ?";
                connection.query(sql,params, function (err, result) 
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
                })

            }
);

///Operaciones

app.get("/media",
        function(request,response)
        {
            let id =  request.query.id;
            let params = [id]
            let sql;
            if (request.query.id == null)
                sql = "SELECT AVG(mark) AS nota_media FROM marks";
            else
                sql = "SELECT AVG(mark) AS nota_media FROM marks WHERE student_id = ?";

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

app.get("/apuntadas",
        function(request,response)
        {
            let id = request.query.id
            let params = [id]
            let sql;
            if(request.query.id == null)
                sql = `SELECT sb.title, s.first_name, s.last_name FROM subjects AS sb 
                        JOIN subjects_teacher AS st ON (sb.subject_id = st.subject_id)
                        JOIN students AS s ON (st.group_id = s.group_id)`
            else
                sql = `SELECT sb.title,s.first_name, s.last_name FROM subjects AS sb 
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

app.get("/impartidas",
        function(request,response)
        {
            let id = request.query.id
            let params = [id]
            let sql;
            if(request.query.id == null)
                sql = `SELECT sb.title, t.first_name, t.last_name FROM subjects AS sb 
                        JOIN subjects_teacher AS st ON (sb.subject_id = st.subject_id)
                        JOIN teachers AS t ON (st.teacher_id = t.teacher_id)`
            else
                sql = `SELECT sb.title, t.first_name, t.last_name FROM subjects AS sb 
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

////////ERROR 404
app.use(function(req,res,next)
        {
            respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
            res.status(404).send(respuesta);
        })



app.listen(3000);