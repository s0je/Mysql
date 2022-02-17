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