class Alumno {

    constructor(fisrt_name,last_name, group_id)
    {
        this.fisrt_name = fisrt_name;
        this.last_name = last_name;
        this.group_id = group_id;
    }    
}


function mostrarAlumno(){
    
    let id = document.getElementById("indice").value;
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: visible;	display: block;';
    let pizarra = document.getElementById("pizarra");
    pizarra.innerHTML= '';
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
        let temp= '';
        let j = 1;
    for(let t of datos)
    {
        temp += `<tr>
                    <th scope="row">${j}</th>
                    <td>${t.first_name}</td>
                    <td>${t.last_name}</td>
                    <td>${t.group_id}/td>
                </tr>`
    }    
    let table = `<table id="tabla" class="table" style="color: white;">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre:</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Grupo</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${temp}
                    </tbody>
                </table>`;
    pizarra.appendChild(table);
    })
    .catch(err)
    {
        console.log(err)
    }
}
///Mostrar formulario

function mostrarForm()
{
    let pizarra = document.getElementById("pizarra");
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: hidden;	display: none;';
    let div = document.createElement('div');
    let temp = '';
    pizarra.innerHTML= '';
    temp = `<form style="margin: 50px">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre del Alumno</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="apellido" class="form-label">Apellido</label>
      <input type="text" class="form-control" id="apellido">
    </div>
    <div class="mb-3">
      <label for="grupo" class="form-label">Grupo</label>
      <input type="text" class="form-control" id="grupo">
    </div>
    <button type="submit" onclick="mostrarAlumno()" class="btn btn-warning">Enivar</button>
  </form>`;
    div.innerHTML = temp;
    pizarra.appendChild(div);
}



////CRear Alumno
function crearAlumno() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let grupo = document.getElementById("grupo").value;

    let alumno = new Alumno (nombre,apellido,grupo);

    let url = "http://localhost:5500/alumnos";

    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(datos),
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
}