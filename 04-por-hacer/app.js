const argv = require("./config/yargs").argv;
const porHacer = require("./todo/porHacer");

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let respuesta = porHacer.crear(argv.descripcion)
        console.log(respuesta);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea');
        break;

    default:
        console.log('El comando no existe');
        break;
}