import "./styles.css"
import {Tarea,TareaLista} from "./clases"
import {crearTareaHtml} from "./js/funciones.js";
//import {listaTarea} from "./js/funciones.js";

export const listaTarea = new TareaLista();

listaTarea.tareas.forEach((elemento)=>{crearTareaHtml(elemento)});

const tareaNueva = new Tarea("Probando webpack");
listaTarea.nuevaTarea(tareaNueva);
crearTareaHtml(tareaNueva);

console.log(listaTarea);

//localStorage.setItem('my-key','ABC1234');
// sessionStorage.setItem('nombre','Tobias')

// setTimeout(()=>{
//     localStorage.removeItem('my-key')
//     sessionStorage.removeItem('nombre')
// },1500)