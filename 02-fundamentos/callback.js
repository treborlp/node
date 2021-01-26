//Ejemplo 1
setTimeout(() => { // La funcion setTimeOut recibe otra funcion como parametro
    console.log("Me ejecuto despues de tres segundos");
}, 3000)


//Ejemplo 2
let funcionAleatoria = (id, callback) => {
    let usuario = {
        nombre: "Robert Alvarado",
        id //Desde ecma script 6 ya no es necesario especificar id:id
    }
    if (id === 20)
        callback(`El usuario no existe en la bd`)
    else
        callback(null, usuario)
}

funcionAleatoria(20, (err, usuario) => {
    if (err)
        return console.log(err, usuario);

    console.log(`El usuario es`, usuario);
})

//Ejemplo 3
let calcularAreaCirculo = (radio, calculo) => {

    if (radio < 0)
        calculo(`El radio: ${radio} del circulo no puede ser un valor negativo`);
    else {
        let area = Math.PI * Math.pow(radio, 2);
        calculo(null, area);
    }
}

calcularAreaCirculo(19, (err, area) => {
    if (err)
        return console.log(err);

    console.log(`El area del circulo es: ${area}`);

})