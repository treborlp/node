const fs = require('fs')

const path = './db/data.json'

const guardarDatos = (data) => {
    fs.writeFileSync(path, JSON.stringify(data));
}

const leerArchivo = () => {
    if (!fs.existsSync(path)) { //verificamos si el archivo existe
        return null;
    }

    let data = fs.readFileSync(path, { encoding: 'utf-8' }); // Leemos el archivo y codificamos en utf-8

    return JSON.parse(data);
}

module.exports = {
    guardarDatos,
    leerArchivo
}