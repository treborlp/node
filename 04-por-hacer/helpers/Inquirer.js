const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [{
        value: '1',
        name: '1. Crear tarea'
    }, {
        value: '2',
        name: '2. Listar tareas'
    }, {
        value: '3',
        name: '3. Listar tareas completadas'
    }, {
        value: '4',
        name: '4. Listar tareas pendientes'
    }, {
        value: '5',
        name: '5. Completar tarea(s)'
    }, {
        value: '6',
        name: '6. Borrar tarea'
    }, {
        value: '0',
        name: '0. Salir'
    }]
}]

const preguntas2 = [{
    type: 'input',
    name: 'opcion',
    message: `Presione la tecla ${'ENTER'.green} para continuar:`
}]

const inquirerMenu = async() => {

    console.clear();
    console.log("=======================".green);
    console.log("Seleccione una opción".green);
    console.log("=======================\n".green);

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion
}

const pausa = async() => {
    await inquirer.prompt(preguntas2)
}

const leerInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'escribe',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor'
            } else {
                return true
            }
        }
    }]
    let { escribe } = await inquirer.prompt(question)
    return escribe
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}