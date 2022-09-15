let opcion

do{
    opcion = parseInt(prompt('Escriba la opcion que desea: \n 1. Indicar tarea \n 2. Eliminar tarea \n 3. Salir'))

    switch (opcion){
        case 1:
            alert('Indicar tarea'); {
                let tareas = prompt("Describa: ")
                console.log(tareas)
            }
            break

        case 2:
            alert('Eliminar tarea'); {
                let arrayTareas = ["tender la cama", "pasear al perro"];
                arrayTareas.pop();
                console.log(arrayTareas)
            }
            break

        case 3:
            alert('Salir')
            break
        
        default:
            alert('Opcion no valida')

    }

}while(option != 4)