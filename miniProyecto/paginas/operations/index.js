const pizarra = document.getElementById("pizarra");
////////Media

function notaMedia(){
    let id = document.getElementById("indice").value;
    let th = '';
    let td = '';
    let url='';
    console.log(id)
    if(id=='')
    {
        url = `http://localhost:3000/media`;
        
    }else{
        url = `http://localhost:3000/media?id=${id}`;
        th =`<th scope="col">Id Alumno</th>`;
        td = `<td>${id}</td>`

    }
    let params = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
    fetch(url,params)
    .then(function(data){
        return data.json()
    })
    .then(function(datos){
        let temp= '';
        console.log(datos);
        for(let t of datos)
        {
            temp += `
            <table id="tabla" class="table" style="color: white;">
                <thead>
                    <tr>
                        <th scope="col">Nota Media</th>
                        ${th}
                    </tr>
                </thead>
                <tbody id="tBody">
                    <tr>
                        <td>${t.nota_media}</td>
                        ${td}
                    </tr>
                </tbody>
            </table> `
        }
        pizarra.innerHTML = temp;    
    })
}  

////////Apuntadas

function mostrarApuntadas(){
    let id = document.getElementById("indice").value;
    let url='';
    console.log(id)
    if(id=='')
    {
        url = `http://localhost:3000/apuntadas`;
        pizarra.style.cssText = 'height: auto;'
    }else{
        url = `http://localhost:3000/apuntadas?id=${id}`;
        pizarra.style.cssText = 'height: 400px';
        


    }
    let params = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
    fetch(url,params)
    .then(function(data){
        return data.json()
    })
    .then(function(datos){
        let temp= '';
        let tableIni = `<table id="tabla" class="table" style="color: white;">
                        <thead>
                            <tr>
                                <th scope="col">Asignatura</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                            </tr>
                        </thead>
                        <tbody id="tBody">`;
        let tableEnd = `</tbody>
                        </table> `
        console.log(datos);
        for(let t of datos)
        {
            temp += `

                    <tr>
                        <td>${t.title}</td>
                        <td>${t.first_name}</td>
                        <td>${t.last_name}</td>
                    </tr>`

        }
        let table = tableIni + temp + tableEnd;
        pizarra.innerHTML = table;    
    })
}

////////////Impartidas

function mostrarImpartidas(){
    let id = document.getElementById("indice").value;
    let url='';
    console.log(id)
    if(id=='')
    {
        url = `http://localhost:3000/impartidas`;
        pizarra.style.cssText = 'height: auto;'
    }else{
        url = `http://localhost:3000/impartidas?id=${id}`;
        pizarra.style.cssText = 'height: 400px';
        


    }
    let params = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
    fetch(url,params)
    .then(function(data){
        return data.json()
    })
    .then(function(datos){
        let temp= '';
        let tableIni = `<table id="tabla" class="table" style="color: white;">
                        <thead>
                            <tr>
                                <th scope="col">Asignatura</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                            </tr>
                        </thead>
                        <tbody id="tBody">`;
        let tableEnd = `</tbody>
                        </table> `
        console.log(datos);
        for(let t of datos)
        {
            temp += `

                    <tr>
                        <td>${t.title}</td>
                        <td>${t.first_name}</td>
                        <td>${t.last_name}</td>
                    </tr>`

        }
        let table = tableIni + temp + tableEnd;
        pizarra.innerHTML = table;    
    })
}










///Botones
function media(){
    pizarra.innerHTML = '';
    pizarra.style.cssText = 'height: 400px';
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: visible; display:block;';
    let media = document.getElementById("media");
    media.style.cssText = 'visibility: visible; display:block;';
    let apuntadas = document.getElementById("apuntadas");
    apuntadas.style.cssText = 'visibility: hidden; display:none;';
    let impartidas = document.getElementById("impartidas");
    impartidas.style.cssText = 'visibility: hidden; display:none;';
}

function apuntadas(){
    pizarra.innerHTML = '';
    pizarra.style.cssText = 'height: 400px';
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: visible; display:block;';
    let media = document.getElementById("media");
    media.style.cssText = 'visibility: hidden; display:none;';
    let apuntadas = document.getElementById("apuntadas");
    apuntadas.style.cssText = 'visibility: visible; display:block;';
    let impartidas = document.getElementById("impartidas");
    impartidas.style.cssText = 'visibility: hidden; display:none;';
}

function impartidas(){
    pizarra.innerHTML = '';
    pizarra.style.cssText = 'height: 400px';
    let buscador = document.getElementById("buscador");
    buscador.style.cssText = 'visibility: visible; display:block;';
    let media = document.getElementById("media");
    media.style.cssText = 'visibility: hidden; display:none;';
    let apuntadas = document.getElementById("apuntadas");
    apuntadas.style.cssText = 'visibility: hidden; display:none;';
    let impartidas = document.getElementById("impartidas");
    impartidas.style.cssText = 'visibility: visible; display:block;';
}