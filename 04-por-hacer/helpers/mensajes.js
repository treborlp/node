require('colors')

const mostrarMenu = () => {
    console.log("=======================".green);
    console.log("Seleccione una opción".green);
    console.log("=======================\n".green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Completadas`);
    console.log(`${'4.'.green} Listar Tareas Pendientes}`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question('Seleccione una opcion: ', (opt) => {
        readLine.close();
    })

}

const pausa = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`Presione ${'ENTER'.green} para continuar: `, (opt) => {
        readLine.close();
    })
}

module.exports = {
    mostrarMenu,
    pausa
}