const addForm =document.getElementById('formulario');
const container = document.getElementById('contenedor-de-cards');
const div = document.createElement('div');

let listaDeTareas = []

function Tarea(id,titulo , responsable, tiempo){
    this.id = id;
    this.titulo = titulo;
    this.responsable = responsable;
    this.tiempo = tiempo;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('submit');

    listaDeTareas.push(new Tarea(
        listaDeTareas.length +1,
        document.getElementById('input-titulo').value,
        document.getElementById('input-responsable').value,
        document.getElementById('input-tiempo').value,
    ))

    generateTemplate();
});

function generateTemplate(){
    div.classList.add('container');
    div.classList.add('col-5');
    div.classList.add('g-3');
    div.innerHTML = ''
    listaDeTareas.forEach((item)=>{
        div.innerHTML += `
        <div id="card-${item.id}" class="card" style="width: 18rem; color: black">
            <div class="card-body">
                <h5 class="card-title">${item.titulo} ID#${item.id}</h5>
                <p class="card-text">Esta tarea tiene como responsable a ${item.responsable} y requiere un tiempo de ${item.tiempo} horas</p>
                <a class="btn btn-danger" onclick="eliminarCard(${item.id})">Eliminar</a>
            </div>
        </div>
        `
    })
    container.appendChild(div)
}

function eliminarCard(idFormDelete){
    listaDeTareas = listaDeTareas.filter((item)=> item.id !== idFormDelete)
    div.removeChild(document.getElementById(`card-${idFormDelete}`))
    generateTemplate();
}