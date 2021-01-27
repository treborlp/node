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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoBD = empleados.find(empleado => empleado.id === id); //Buscamos el empleado en el arreglo y lo retornamos 

        if (!empleadoBD)
            reject(`el empleado con el id: ${id} no existe en la BD.`);
        else
            resolve(empleadoBD)
    })
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find(salario => empleado.id === salario.id)

        if (!salarioBD)
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`)
        else {
            let respuesta = {
                nombre: empleado.nombre,
                salario: salarioBD.salario
            }
            resolve(respuesta)
        }
    })
}

getEmpleado(1).then(empleado => {
    //console.log(empleado)
    getSalario(empleado).then(salario => {
        console.log(salario);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
})