import{Tarea} from './tareas.class'

export class TareaLista{
    constructor(){
        //this.tareas = [];
        this.cargarLocalStorage();

    }
    nuevaTarea(tarea){
        this.tareas.push(tarea);
        this.guardarLocalStorage();
    }
    eliminarTarea(id){
        this.tareas = this.tareas.filter(elemento => elemento.id != id);
        this.guardarLocalStorage();
    }
    marcarCompletado(id){
        for(const elemento of this.tareas){
            if(elemento.id == id){
                elemento.completado = !elemento.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    eliminarCompletados(){
        this.tareas = this.tareas.filter(elemento => !elemento.completado);
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        localStorage.setItem('tarea',JSON.stringify(this.tareas))
    }
    cargarLocalStorage(){
        // if(localStorage.getItem('tarea')){
        //     this.tareas = JSON.parse(localStorage.getItem('tarea'));
        // }else{
        //     this.tareas = [];
        // }
        this.tareas = (localStorage.getItem('tarea')) ? JSON.parse(localStorage.getItem('tarea')) : [];
        this.tareas = this.tareas.map(obj => Tarea.fromJson(obj));
    }
}