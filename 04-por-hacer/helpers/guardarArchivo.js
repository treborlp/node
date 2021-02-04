const fs = require('fs')

const guardarDatos = (data) => {
    const path = './db/data.json'
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = {
    guardarDatos
}