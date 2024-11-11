import "../css/funciones.css"
import { Tarea } from "../clases/tareas.class.js";
import {listaTarea} from "../index.js"
import { TareaLista } from "../clases/tareas-lista.class.js";
//referencias al html
const divTareaLista = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchorFiltro = document.querySelectorAll(".filtro");
const textoPendientes = document.querySelector(".todo-count strong");

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

export const mostrarPendientes = (tareas)=>{
    let contador = 0;
    tareas.forEach( tarea => {
        if(!tarea.completado){
            contador++;
        }
    })
    textoPendientes.innerText= contador
}


/////crear eventos
txtInput.addEventListener("keyup",(evento)=>{
    //console.log(evento);
    if (evento.keyCode === 13 && txtInput.value.length > 0){
        const nuevaTarea = new Tarea(txtInput.value);
        listaTarea.nuevaTarea(nuevaTarea);
        console.log(listaTarea);
        crearTareaHtml(nuevaTarea);
        txtInput.value = "";
        mostrarPendientes(listaTarea.tareas)
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
     mostrarPendientes(listaTarea.tareas)
    // console.log(tareaId)
    // console.log(tareaElemento);
})

btnBorrar.addEventListener('click',()=>{
    listaTarea.eliminarCompletados();
    mostrarPendientes(listaTarea.tareas)
    console.log(listaTarea);

    for (let i = divTareaLista.children.length -1; i>0; i--) {
        const elemento= divTareaLista.children[i];
        //console.log(elemento)
        if(elemento.classList.contains('completed')){
            divTareaLista.removeChild(elemento)
        }
    }
})

ulFiltros.addEventListener('click', (evento)=>{
    const filtro = evento.target.text;
    let contador = 0
    if(!filtro) return;
    anchorFiltro.forEach(elemento => elemento.classList.remove('selected'))
    evento.target.classList.add('selected')

    for(const elemento of divTareaLista.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed')

        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
        if(!completado){
            contador ++;
        }
    }
    textoPendientes.innerText = contador
})
