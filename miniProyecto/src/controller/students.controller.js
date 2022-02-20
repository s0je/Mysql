class alumno {

    constructor(id,fisrt_name,last_name, group_id)
    {
        this.student_id = id;
        this.fisrt_name = fisrt_name;
        this.last_name = last_name;
        this.group_id = group_id;
    }    
}

function mostrarAlumno(){
    let id = document.getElementById("indice").value;
    let pizzarra = document.getAnimations("tabla");
    let url='';
    if(id=='')
    {
        url = `http://127.0.0.1:3000/alumnos`;
    }else{
        url = `http://127.0.0.1:3000/alumnos?id=${id}`;
    }
    let params = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
    fetch(url,params)
    .then((data) =>{
        return data.json();
    })
    .then((datos) => {
        let tabla= '';


    })
    .catch(err)
    {
        console.log(err)
    }
}