//Imported
const fs = require("fs");

let base = 5;

let tabla = "";

for (let i = 1; i <= 12; i++) {
    tabla += `${base} * ${i} = ${base*i} \n`
}

fs.writeFile(`tablas/tabla-${base}`, tabla, (err) => {
    if (err) throw err;

    console.log(`El archivo tabla-${base} fue creado con exito.`);
})