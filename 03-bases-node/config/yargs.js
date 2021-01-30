const argv = require("yargs")
    .options({
        'b': {
            alias: 'base',
            describe: 'base',
            type: 'number',
            demandOption: true //El valor es requerido 
        },
        'l': {
            alias: 'listar',
            describe: 'Crear Archivo',
            default: false,
            type: 'boolean'
        },
        'h': {
            alias: 'hasta',
            describe: 'limite',
            type: 'number',
        }
    })
    .check((argv, options) => { // Si demandOption se encuentra en TRUE entra en el check
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw new Error("La base y el limite deben ser numeros")
        } else {
            return true
        }
    })
    .argv


module.exports = argv;