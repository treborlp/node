const { calcularTabla } = require('./multiplicar/multiplicar')

//console.log(process.argv);
let argv = process.argv[2];

let base = argv.split("=")[1];

calcularTabla(base)
    .then(archivo => console.log(`${archivo} creado`))
    .catch(errores => console.log(errores))