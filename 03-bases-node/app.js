const { calcularTabla } = require('./multiplicar/multiplicar')

calcularTabla("abc")
    .then(archivo => console.log(`${archivo} creado`))
    .catch(err => console.log(err))