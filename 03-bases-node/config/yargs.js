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


module.exports = argv;