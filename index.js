const addForm =document.getElementById('formulario');
const container = document.getElementById('contenedor-de-cards');
const div = document.createElement('div');
// const botonToast = document.getElementById("btnMostrarToast");

let listaDeTareas = [];
let usuario;

// Variables para elementos de autenticación y usuario
let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;

function iniciarElementos(){
    formularioIdentificacion = document.getElementById("formularioIdentificacion");
    inputUsuario = document.getElementById("inputUsuario");
    contenedorIdentificacion = document.getElementById("contenedorIdentificacion");
    contenedorUsuario = document.getElementById("contenedorUsuario");
    textoUsuario = document.getElementById("textoUsuario");
}

function iniciarEventos(){
    formularioIdentificacion.onsubmit = (event) => identificarUsuario(event);

}

function identificarUsuario(event) {
    event.preventDefault();
    usuario = inputUsuario.value;
    formularioIdentificacion.reset();
    actualizarUsuarioStorage();
    mostrarTextoUsuario();
}

function mostrarTextoUsuario(){
    contenedorIdentificacion.hidden = true;
    contenedorUsuario.hidden = false;
    textoUsuario.innerHTML +=`${usuario}`;
}

function mostrarFormularioIdentificacion(){
    contenedorIdentificacion.hidden = false;
    contenedorUsuario.hidden = true;
    textoUsuario.innerHTML =``;
}

function actualizarUsuarioStorage(){
    localStorage.setItem("usuario", usuario)
}

function obtenerUsuarioStorage(){
    let usuarioAlmacenado = localStorage.getItem("usuario")
    if (usuarioAlmacenado){
        usuario = usuarioAlmacenado;
        mostrarTextoUsuario();
    }
}
// Fin Usuario //

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
    formulario.reset();
    actualizarTareaStorage();
    mostrarMensajeconfirmacion();
});

function generateTemplate(){
    div.classList.add('container');
    div.classList.add('col-5');
    div.classList.add('g-3');
    div.innerHTML = ''
    listaDeTareas.forEach((item)=>{
        div.innerHTML += `
        <div id="card-${item.id}" data="lista" class="card" style="width: 18rem; color: black">
            <div class="card-body">
                <h5 class="card-title">${item.titulo} ID#${item.id}</h5>
                <p class="card-text">Esta tarea tiene como responsable a ${item.responsable} y requiere un tiempo de ${item.tiempo} horas</p>
                <a class="btn btn-danger" onclick="eliminarCard(${item.id})">Eliminar</a>
            </div>
        </div>
        `
    })
    container.appendChild(div);
}

function eliminarCard(idFormDelete){
    listaDeTareas = listaDeTareas.filter((item)=> item.id !== idFormDelete)
    div.removeChild(document.getElementById(`card-${idFormDelete}`))
    generateTemplate();
    actualizarTareaStorage ();
}

function actualizarTareaStorage (){
    let listaDeTareasJSON = JSON.stringify(listaDeTareas)
    localStorage.setItem("tarea", listaDeTareasJSON)
}

function obtenerTareasStorage(){
    let listaDeTareasJSON = localStorage.getItem("tarea")
    
    if(listaDeTareasJSON){
        listaDeTareas = JSON.parse(listaDeTareasJSON)

        generateTemplate();
    }
}

function mostrarMensajeconfirmacion(){
    Toastify({
        text: "Tarea agregada!!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}

function main(){
    iniciarElementos();
    iniciarEventos();
    obtenerUsuarioStorage();
    obtenerTareasStorage();
    mostrarMensajeconfirmacion();
}

main();