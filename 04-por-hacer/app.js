const argv = require('yargs').argv

let comando = argv._[0]

switch (comando) {
    case 'crear':
        console.log("Crear una tarea");
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