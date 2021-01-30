const { calcularTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs')
    //console.log(process.argv);
    //console.log(argv)

//let base = argv.split("=")[1];


console.log(argv.l);
calcularTabla(argv.b, argv.l)
    .then(msj => console.log(msj))
    .catch(errores => console.log(errores))