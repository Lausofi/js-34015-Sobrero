// let nombre;

// alert("Ingrese los 3 ingredientes fundamentales para hacer brownies.")

// for (let i = 1; i <= 3; i++) {

// 	do {

// 	  nombre = prompt("Escriba el primer ingrediente " + i);

// 	} while (nombre == "");

// 	console.log("El ingrediente " + nombre + " salió en la posicion nro: " + i);

// }

const edadUno = parseFloat(prompt("Ingresa la primer edad: "))
const edadDos = parseFloat(prompt("Ingresa la segunda edad: "))
const edadTres = parseFloat(prompt("Ingresa la tercera edad: "))

function sumarEdades(
  edadUno,
  edadDos,
  edadTres
) {
  let suma = edadUno + edadDos + edadTres;
  return suma;
}
function mostrarPromedio() {
  let resultadoSuma = sumarEdades(edadUno, edadDos, edadTres);
  let promedio = resultadoSuma / 3;
  alert("El promedio de edad es: " + promedio.toFixed(2));
}
mostrarPromedio();