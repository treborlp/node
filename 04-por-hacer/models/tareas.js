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

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
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

    listarPendientesCompletadas(completadas = true) {
        let numeracion = 0

        if (completadas) {

            this.listadoArr.forEach((tarea, index) => {
                if (tarea.completadoEn) {
                    numeracion++;
                    console.log(`${numeracion.toString().green}. ${tarea.desc} :: ${'Completada'.green}`);
                }
            })
        } else {
            this.listadoArr.forEach((tarea, index) => {
                if (!tarea.completadoEn) {
                    numeracion++;
                    console.log(`${numeracion.toString().green}. ${tarea.desc} :: ${'Pendiente'.red}`);
                }
            })
        }
    }


    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}



module.exports = Tareas