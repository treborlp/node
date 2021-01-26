//Cuando ejecutamos una funcion en JavaScript, normalmente esta expresada de manera verbosa


//Sin funcion de flecha
function sonreir() {
    let abrirBoca = 1;
    let mostrarDientes = 1;
    let cerrarOjos = 0;

    console.log(`${abrirBoca} ${mostrarDientes} ${cerrarOjos}`);
}

sonreir();

//Con funcion de flecha
let sonreirFlecha = () => {
    let abrirBoca = 1;
    let mostrarDientes = 1;
    let cerrarOjos = 1;

    console.log(`${abrirBoca} ${mostrarDientes} ${cerrarOjos}`);
}

sonreirFlecha();

//Con felcha y argumentos

let sumarNumeros = (a, b) => a + b;

console.log(`${sumarNumeros(458,452)}`);

//Con flecha y sin argumentos

let dormir = () => "ZZzZzZzZz";

console.log(`${dormir()}`);

//Es recomendable no usar las funciones de flecha en los objetos que contienen funciones