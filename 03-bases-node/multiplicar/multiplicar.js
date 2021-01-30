//Imported
const fs = require("fs");
const colors = require("colors")

let calcularTabla = (base, createFile, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            return reject(`${base} o ${limite}: no es un número`)
        }
        let tabla = "";

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i} \n`
            console.log(`${base} * ${i}` + " = ".trap + `${base*i}`);
        }

        let mensaje = `Se creo el archivo de la tabla ${base}`;
        if (createFile) {
            fs.writeFile(`tablas/tabla-${base}`, tabla, (err) => {
                if (err) throw reject(err);

                //console.log(`El archivo tabla-${base} fue creado con exito.`);
                mensaje = `Archivo de la tabla-${base}creado`
            })
        } else {
            mensaje = `La tabla del ${base} (No se creo el archivo)`
        }
        resolve(mensaje)
    })
}

module.exports = {
    calcularTabla
}