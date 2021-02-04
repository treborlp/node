require('colors')
    //const { mostrarMenu, pausa } = require('./helpers/mensajes')
const { inquirerMenu, pausa } = require('./helpers/Inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    let opt = '';
    do {
        // opt = await mostrarMenu();
        // opt = await inquirerMenu();
        //console.log({ opt });

        const tarea = new Tarea("Pasear a rocky");
        const tarea2 = new Tarea("Lavar la ropa");
        const tareas = new Tareas();

        tareas[tarea.id] = tarea
        tareas[tarea2.id] = tarea2
        console.log(tareas);

        await pausa();
    } while (opt !== '0')

    //pausa();
}

main();