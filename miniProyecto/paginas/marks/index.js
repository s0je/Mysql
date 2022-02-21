class Nota {

    constructor(mark_id, student_id, subject_id, date, mark)
    {
        this.mark_id = mark_id;
        this.student_id = student_id;
        this.subject_id = subject_id;
        this.date = date;
        this.mark = mark;
    }    
}


function mostrarNota(){
    
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
        url = `http://localhost:3000/notas`;
    }else{
        url = `http://localhost:3000/notas?id=${id}`;
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
                    <td>${t.student_id}</td>
                    <td>${t.subject_id}</td>
                    <td>${t.date}</td>
                    <td>${t.mark}</td>
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

////CRear Nota
function crearNota() {
    let alumno = document.getElementById("alumno").value;
    let asignatura = document.getElementById("asignatura").value;
    let fecha = document.getElementById("fecha").value;
    let nota = document.getElementById("nota").value;
    let id = '';
    let url;
    let nuevaNota = new Nota (id,alumno,asignatura,fecha,nota);
    console.log(nuevaNota);

    url = "http://localhost:3000/notas";


    let param = 
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(nuevaNota),
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

///Update Nota

function updateNota()
{
    let alumno = document.getElementById("alumnoUpdate").value;
    let asignatura = document.getElementById("asignaturaUpdate").value;
    let fecha = document.getElementById("fechaUpdate").value;
    let nota = document.getElementById("notaUpdate").value;
    let id = document.getElementById("idUpdate").value;
    if(alumno == '')
        alumno = null;
    if(asignatura == '')
        asignatura = null;
    if(fecha == '')
        fecha = null;
    if(nota == '')
        nota = null;
    let url = "http://localhost:3000/notas";
    let nuevaNota = new Nota (id,alumno,asignatura,fecha,nota);
    console.log(nuevaNota)
    let param = 
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(nuevaNota),
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

//DELETE Nota

function deleteNota()
{

    let id = document.getElementById("idDelete").value;
    let nuevaNota = new Nota (id,'','','','');
    

    let url = "http://localhost:3000/notas";
    let param = 
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(nuevaNota),
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
    let pizarra = document.getElementById("pizarra");
    pizarra.style.cssText = 'height: auto;'
    
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