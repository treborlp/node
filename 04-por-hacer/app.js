require('colors')
    //const { mostrarMenu, pausa } = require('./helpers/mensajes')
const { inquirerMenu, pausa, leerInput } = require('./helpers/Inquirer');
const Tareas = require('./models/tareas');
const { guardarDatos, leerArchivo } = require('./helpers/guardarArchivo')


console.clear();

const main = async() => {
    let opt = '';
    let tareas = new Tareas();
    const data = leerArchivo();

    if (data) {
        tareas.cargarTareasFromArr(data);
        // console.log(tareas._listado);
    }

    // await pausa();
    do {
        // opt = await mostrarMenu();
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                let tarea = await leerInput('Escribe una tarea por hacer:')
                tareas.crearTarea(tarea);
                break;
            case '2':
                tareas.listadoCompleto()
                break;
            case '3':
                tareas.listarPendientesCompletadas(true)
                break;
            case '4':
                tareas.listarPendientesCompletadas(false)
                break;
            case '5':
                console.log('object');
                break;
            case '6':
                console.log('6');
                break
            case '0':
                console.log('salir');
                break
        }
        guardarDatos(tareas.listadoArr)
            //console.log({ opt });
        await pausa();
    } while (opt !== '0')


    //pausa();
}

main();