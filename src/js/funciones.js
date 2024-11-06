import "../css/funciones.css"
import { Tarea } from "../clases";
import {listaTarea} from "../index.js"
//referencias al html
const divTareaLista = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");

export const crearTareaHtml = (tarea)=>{
    const htmlTarea = `
    <li class="${(tarea.completado) ? "completed" : ""}" data-id="${tarea.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(tarea.completado) ? "checked" : ""}>
            <label>${tarea.descripcion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>
        `;
    const div = document.createElement("DIV");
    div.innerHTML = htmlTarea;

    divTareaLista.append(div.firstElementChild);
    return div;
}

/////crear eventos
txtInput.addEventListener("keyup",(evento)=>{
    console.log(evento);
    if (evento.keycode === 13 && txtInput.value.lenght > 0){
        const nuevaTarea = new Tarea(txtInput.value);
        listaTarea.nuevaTarea(nuevaTarea);
        //console.log(listaTarea);
        crearTareaHtml(nuevaTarea);
        txtInput.value = "";
    }
})

divTareaLista.addEventListener("click",(evento)=>{
    //console.log(evento.target.localName)
    const nombreElemento = evento.target.localName;
    const tareaElemento = evento.target.parentElement.parentElement;
    const tareaId = tareaElemento.getAttribute("data-id");
    if(nombreElemento.includes('input')){
        listaTarea.marcarCompletado(tareaId);
        tareaElemento.classList.add("completed");
     }else if(nombreElemento.includes('button')){
        listaTarea.eliminarTarea(tareaId);
        divTareaLista.removeChild(tareaElemento);
     }
    // console.log(tareaId)
    // console.log(tareaElemento);
})

btnBorrar.addEventListener('click',()=>{
    listaTarea.eliminarCompletados();
    console.log(listaTarea);

    for (let i = divTareaLista.children.lenght -1; i>0; i--) {
        const elemento= divTareaLista.children[i];
        //console.log(elemento)
        if(elemento.classList.contains('completed')){
            divTareaLista.removeChild(elemento)
        }
    }
})
