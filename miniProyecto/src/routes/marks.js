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

//////POST Profesor

router.post("/", 
        function(request, response)
        {
            let params = [request.body.studentId, request.body.subjectId, request.body.date,request.body.mark]
            let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ?;";
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
            let params = [request.body.studentId, request.body.subjectId, request.body.date, request.body.mark, request.body.markId]
            let sql = `UPDATE marks SET  student_id= COALESCE(?, student_id),
                        subject_id = COALESCE(?, subject_id),
                        date = COALESCE(?, date),
                        mark = COALESCE(?, mark)
                        WHERE mark_id = ?`;
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
                let sql = "DELETE FROM marks WHERE student_id = ?";
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