const { calcularTabla } = require('./multiplicar/multiplicar')
const argv = require("yargs").argv

//console.log(process.argv);
console.log(process.argv);
console.log(argv)

//let base = argv.split("=")[1];

/*calcularTabla(base)
    .then(archivo => console.log(`${archivo} creado`))
    .catch(errores => console.log(errores))*/