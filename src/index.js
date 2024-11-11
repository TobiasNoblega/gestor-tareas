import "./styles.css"
import {Tarea,TareaLista} from "./clases"
import {crearTareaHtml,mostrarPendientes} from "./js/funciones.js";
//import {listaTarea} from "./js/funciones.js";

export const listaTarea = new TareaLista();

listaTarea.tareas.forEach(crearTareaHtml);
mostrarPendientes(listaTarea.tareas);

// const tareaNueva = new Tarea("Probando webpack");
// listaTarea.nuevaTarea(tareaNueva);
// crearTareaHtml(tareaNueva);

//console.log(listaTarea);

//localStorage.setItem('my-key','ABC1234');
// sessionStorage.setItem('nombre','Tobias')

// setTimeout(()=>{
//     localStorage.removeItem('my-key')
//     sessionStorage.removeItem('nombre')
// },1500)