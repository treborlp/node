const { calcularTabla } = require('./multiplicar/multiplicar')

calcularTabla("abc")
    .then(archivo => console.log(`${archivo} creado`))
    .catch(errores => console.log(errores))