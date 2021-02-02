require('colors')
const { mostrarMenu, pausa } = require('./helpers/mensajes')
const { inquirerMenu } = require('./helpers/Inquirer')


console.clear();

const main = async() => {
    let opt = '';
    do {
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        console.log({ opt });
        await pausa();
    } while (opt !== '0')

    //pausa();
}

main();