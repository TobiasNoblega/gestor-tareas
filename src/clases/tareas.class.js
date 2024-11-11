export class Tarea{
    static fromJson({descripcion,id,completado,fecha}){
        const tempTarea = new Tarea(descripcion);
        tempTarea.id = id;
        tempTarea.completado = completado;
        tempTarea.fecha = fecha;

        return tempTarea;
    }

    constructor(tarea){
        this.descripcion = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.fecha = new Date();
    }
}