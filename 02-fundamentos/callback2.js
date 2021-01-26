let empleados = [{
        id: 1,
        nombre: "Robert"
    },
    {
        id: 2,
        nombre: "Laura"
    },
    {
        id: 3,
        nombre: "Luis"
    }
]

let salarios = [{
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 9000
    }
]

let getEmpleado = (id, callback) => {
    let empleadoBD = empleados.find(empleado => empleado.id === id); //Buscamos el empleado en el arreglo y lo retornamos 

    if (!empleadoBD)
        callback(`el empleado con el id: ${id} no existe en la BD.`);
    else
        callback(null, empleadoBD)
}

let getSalario = (empleado, callback) => {

    let salario = salarios.find(salario => salario.id === empleado.id)

    if (!salario)
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`)
    else {
        let respuesta = {
            nombre: empleado.nombre,
            salario: salario.salario
        }
        callback(null, respuesta)
    }

}

getEmpleado(3, (err, empleado) => {
    if (err)
        return console.log(err);

    //console.log(empleado);
    getSalario(empleado, (err, respuesta) => {
        if (err)
            return console.log(err);
        console.log(respuesta);
    })
})