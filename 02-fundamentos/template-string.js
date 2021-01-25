let nombre = "Robert"
let apellido = "Alvarado"

console.log(nombre + ' ' + apellido);
console.log(`${nombre} ${apellido}`); //Dentro de los backstick se puede escribir codigo JavaScript

console.log(`${1+1}`); //Ejemplo de codigo javascript dentro de template literal

function saludar() {
    return `${nombre} ${apellido}`
}

console.log(`${ saludar() }`); // Tambien es posible incluir funciones dentro de los templates literales