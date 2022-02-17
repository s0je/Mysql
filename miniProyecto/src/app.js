let express = require("express");
let app = express();
let cors = require('cors')
let students = require("./routes/students");
let teachers = require("./routes/teachers");
let marks = require("./routes/marks");
let adicionales = require("./routes/adicionales");

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/alumnos", students);
app.use("/profesores", teachers);
app.use("/notas", marks);
app.use("/media", adicionales);
app.use("/apuntadas", adicionales);
app.use("/impartidas", adicionales);

app.listen(3000);