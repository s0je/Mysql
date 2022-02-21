class Alumno {

    constructor(id,fisrt_name,last_name, group_id)
    {
        this.student_id = id;
        this.fisrt_name = fisrt_name;
        this.last_name = last_name;
        this.group_id = group_id;
    }    
}


function mostrarAlumno(){
    
    let tabla = document.getElementById("tabla");
    tabla.style.cssText = 'visibility: visible;	display: block; color: white;width: 100%;';
    let id = document.getElementById("indice").value;
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: visible;	display: block;';
    let pizarra = document.getElementById("pizarra");
    let contenedor = document.getElementById('tBody')
    let update = document.getElementById("updateForm");
    update.style.cssText = 'visibility: hidden;	display: none;';
    let updateForm = document.getElementById("createForm");
    updateForm.style.cssText = 'visibility: hidden;	display: none;';
    let del = document.getElementById("deleteForm");
    del.style.cssText = 'visibility: hidden;	display: none;';
    let url='';
    
    if(id=='')
    {
        url = `http://localhost:3000/alumnos`;
    }else{
        url = `http://localhost:3000/alumnos?id=${id}`;
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
        let temp= '';
        let j = 1;
    console.log(datos);
    for(let t of datos)
    {
        temp += `<tr>
                    <th scope="row">${j}</th>
                    <td>${t.first_name}</td>
                    <td>${t.last_name}</td>
                    <td>${t.group_id}</td>
                </tr>`
        j++;
    }    
    
    pizarra.style.cssText = 'height: auto;'
    contenedor.innerHTML = temp;
    
    })
    .catch(function (err) 
    {
        console.log(err)
    })
}

////CRear Alumno
function crearAlumno() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let grupo = document.getElementById("grupo").value;
    let id = '';
    let url;
    let alumno = new Alumno (id,nombre,apellido,grupo);
    console.log(alumno);

    url = "http://localhost:3000/alumnos";


    let param = 
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(alumno),
        method: "POST"
      }
    fetch(url,param)
    .then((data) =>{
        return data.json();
    })
    .then((result) =>
    {
        if(result === 0)
        {
            
        }
        
    })
    .catch(function (err) 
    {
        console.log(err)
    })
}

///Update Alumno

function updateAlumno()
{
    let nombre = document.getElementById("nombreUpdate").value;
    let apellido = document.getElementById("apellidoUpdate").value;
    let grupo = document.getElementById("grupoUpdate").value;
    let id = document.getElementById("idUpdate").value;
    if(nombre == '')
        nombre = null;
    if(apellido == '')
        apellido = null;
    if(grupo == '')
        grupo = null;
    let url = "http://localhost:3000/alumnos";
    let alumno = new Alumno (id,nombre,apellido,grupo);

    let param = 
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(alumno),
        method: "PUT"
      }
    fetch(url,param)
    .then((data) =>{
        return data.json();
    })
    .then((result) =>
    {
        if(result === 0)
        {
            
        }
    })
    .catch(function (err) 
    {
        console.log(err)
    })
}

//DELETE Alumno

function deleteAlumno()
{

    let nombre = '';
    let apellido = '';
    let grupo = '';
    let id = document.getElementById("idDelete").value;
    let alumno = new Alumno (id,nombre,apellido,grupo);
    let pizarra = document.getElementById("pizarra");
    

    let url = "http://localhost:3000/alumnos";
    let param = 
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(alumno),
        method: "DELETE"
      }
    fetch(url,param)
    .then((data) =>{
        return data.json();
    })
    .then((result) =>
    {
        if(result === 0)
        {
            
        }
        pizarra.style.cssText = 'height: 400px;'
    })
}

///Mostrar formularios

function mostrarForm()
{
    let tabla = document.getElementById("tabla");
    tabla.style.cssText = 'visibility: hidden;	display: none;';
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: hidden;	display: none;';
    let update = document.getElementById("updateForm");
    update.style.cssText = 'visibility: hidden;	display: none;';
    let del = document.getElementById("deleteForm");
    del.style.cssText = 'visibility: hidden;	display: none;';
    let create = document.getElementById("createForm");
    create.style.cssText = 'visibility: visible;	display: block;';
    
}

function updateForm()
{
    let tabla = document.getElementById("tabla");
    tabla.style.cssText = 'visibility: hidden;	display: none;';
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: hidden;	display: none;';
    let create = document.getElementById("createForm");
    create.style.cssText = 'visibility: hidden;	display: none;';
    let del = document.getElementById("deleteForm");
    del.style.cssText = 'visibility: hidden;	display: none;';
    let update = document.getElementById("updateForm");
    update.style.cssText = 'visibility: visible;	display: block;';
    let pizarra = document.getElementById("pizarra");
    pizarra.style.cssText = 'height: auto;'
}
function deleteForm()
{
    let tabla = document.getElementById("tabla");
    tabla.style.cssText = 'visibility: hidden;	display: none;';
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: hidden;	display: none;';
    let create = document.getElementById("createForm");
    create.style.cssText = 'visibility: hidden;	display: none;';
    let update = document.getElementById("updateForm");
    update.style.cssText = 'visibility: hidden;	display: none;';
    let del = document.getElementById("deleteForm");
    del.style.cssText = 'visibility: visible;	display: block;';
    let pizarra = document.getElementById("pizarra");
    pizarra.style.cssText = 'height: auto;'
}