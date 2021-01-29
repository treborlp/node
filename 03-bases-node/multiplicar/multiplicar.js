//Imported
const fs = require("fs");

let calcularTabla = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`${base}: no es un número`)
        }
        let tabla = "";

        for (let i = 1; i <= 12; i++) {
            tabla += `${base} * ${i} = ${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}`, tabla, (err) => {
            if (err) throw reject(err);

            //console.log(`El archivo tabla-${base} fue creado con exito.`);
            resolve(`tabla-${base}`)
        })
    })
}

module.exports = {
    calcularTabla
}