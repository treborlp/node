/**
 * Async - Await
 */

//Ejemplo de promesas 

let calcularAreaCirculo = (radio) => {
    return new Promise((resolve, reject) => {
        if (radio < 0)
            reject(`El valor del radio ${radio} no puede ser un valor negativo`)
        else {
            let area = Math.PI * Math.pow(radio, 2);
            resolve(area)
        }
    });
}

calcularAreaCirculo(3).then(area => {
    //console.log(`El area del circulo es: ${area}`);
    console.log("la promesa retorna:", area);
}, (err) => {
    console.log(err);
})

//Ejemplo de promesa usando Async - await
//Async permite abstraer el uso de las promesas de manera implicita 

let calcularAreaCuadrado = async(lado) => {
    if (lado < 0) {
        throw new Error(`El lado del cuadrado: ${lado} no puede ser un valor negativo`)
    } else {
        let area = lado * lado;
        return area;
    }
}

/*calcularAreaCuadrado(10)
    .then(area => console.log(`El area del cuadrado es: ${area}`))
    .catch(err => console.log(err));*/

//Empleando await en el codigo
// await permite simular que las promesas se comporten como procesos sincronos en el mismo hilo
let calcularAreaTotal = async() => {

    let areaCirculo = await calcularAreaCirculo(5);
    let areaCuadrado = await calcularAreaCuadrado(12);

    let areaTotal = areaCirculo + areaCuadrado;

    return areaTotal;

}

calcularAreaTotal().then(resultado => console.log(`El area total es: ${resultado}`)).catch((err) => console.log(err))