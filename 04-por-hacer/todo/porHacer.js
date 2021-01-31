const fs = require('fs');

let listadoPorHacer = [];


const guardarBD = () => {

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('El registro fue guardado');
    });
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarBD();

    return porHacer
}

module.exports = { crear }