let opcion
let arrayTareas =['primero' , 'segundo' , 'tercero']

do{
    opcion = parseInt(prompt('Escriba la opcion que desea: \n 1. Indicar tarea \n 2. Eliminar tarea \n 3. Salir'))

    switch (opcion){
        case 1:
            alert('Indicar tarea'); 

                let tareas = prompt("Describa: ")
                arrayTareas.push(tarea.toLocaleLowercase())
                console.log(tareas)
            
            break

        case 2:
            if(arrayTareas.length === 0) {alert('No tiene tareas creadas'); break;}
            alert("Eliminar una tarea:"
                ${arrayTareas.map(item=> item).join("-")},
                "por favor ingrese el titulo a eliminar");


            let titulo = prompt("Titulo a Eliminar: ").toLocaleLowerCase();

            if(arrayTareas.some(item => item === titulo)){
                arrayTareas = arrayTareas.filter(item => item != titulo)
            }
            else{alert('El titulo ingresado no existe'); break;}
            console.log(arrayTareas);

            break

        case 3:
            alert('Salir')
            break
        
        default:
            alert('Opcion no valida')

    }

        
}while(option != 4)