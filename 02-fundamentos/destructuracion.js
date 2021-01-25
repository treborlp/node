let estudiante = {
    nombre: "Robert",
    apellido: "Alvarado",
    edad: 18,
    datos: function() {
        console.log(`${this.nombre} ${this.apellido} - Edad: ${this.edad}`);
    }
}

//console.log(`${estudiante.datos()}`);

//Cuando se desea obtener los valores individuales del objeto

//Sin destructuracion
let nombre = estudiante.nombre
let apellido = estudiante.apellido
let edad = estudiante.edad

console.log(`Datos individuales sin destructuracion: ${nombre}, ${apellido}, ${edad}`);

//con destructuracion

let { nombre: name, apellido: lastname, edad: age } = estudiante; //La destructuracion nos permite obtener los valores de un objeto en una sola linea

console.log(`Datos individuales con destructuracion : ${name}, ${apellido}, ${edad}`);