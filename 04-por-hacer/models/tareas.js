const Tarea = require("./tarea");
require('colors')

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {}
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]))
        return listado;
    }

    crearTarea(desc) {
        let tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }

    cargarTareasFromArr(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    listadoCompleto() {
        let numeracion = 1;
        this.listadoArr.forEach(tarea => {

            let num = numeracion.toString().green + '.'.green;
            let record;
            if (!tarea.completadoEn) {
                record = 'Pendiente'.red
            } else {
                record = 'Completado'.green
            }
            console.log(`${num} ${tarea.desc} :: ${record}`);
            numeracion++;
        })
    }
}

module.exports = Tareas