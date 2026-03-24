export class tarea {
    static contador = 1;
    constructor(title, descripcion, fecha, priority, notes) {
        this.id = tarea.contador;
        this.title = title;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.priority = priority;
        this.notes = notes;
        tarea.contador++;
    }
}
