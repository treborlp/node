const { calcularTabla } = require('./multiplicar/multiplicar')
const argv = require("yargs")
    .options({
        'b': {
            alias: 'base',
            describe: 'Numero de la tabla ',
            type: 'number',
            demandOption: true //El valor es requerido
        },
        'l': {
            alias: 'listar',
            describe: 'Crear Archivo',
            default: false,
            type: 'boolean'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("La base debe ser un numero")
        } else {
            return true
        }
    })
    .argv
    //console.log(process.argv);
    //console.log(argv)

//let base = argv.split("=")[1];

console.log(argv.l);

calcularTabla(argv.b, argv.l)
    .then(msj => console.log(msj))
    .catch(errores => console.log(errores))