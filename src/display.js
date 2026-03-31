import añadir from "./images/add.svg";
import calendario from "./images/calendar.svg";
import borrarimagen from "./images/delete.svg";
import { cambiarestado, eliminarCarta } from "./controller.js";

export function loadContainer() {
    const campotitulo = document.querySelector(".titulo");
    const titulo = document.createElement("h1");
    titulo.textContent = "Mi To-Do List";
    const subtitulo = document.createElement("p");
    subtitulo.textContent = "Organiza facilmente tus tareas";
    const app = document.querySelector(".app");

    let primero = seccion1();
    let segundo = seccion2();
    let tercero = seccion3();

    campotitulo.appendChild(titulo);
    campotitulo.appendChild(subtitulo);
    app.appendChild(primero);
    app.appendChild(segundo);
    app.appendChild(tercero);
}

function seccion1() {
    const parte1 = document.createElement("div");
    parte1.classList.add("parte1");
    const titulolistas = document.createElement("h2");
    titulolistas.textContent = "Mis Tareas";
    titulolistas.style.color = "blue";
    const agregartarea = document.createElement("button");
    agregartarea.id = "añadir";
    const iconoagregar = document.createElement("img");
    iconoagregar.src = añadir;
    const iconotexto = document.createElement("p");
    iconotexto.textContent = "Agregar";
    agregartarea.appendChild(iconoagregar);
    agregartarea.appendChild(iconotexto);
    parte1.appendChild(titulolistas);
    parte1.appendChild(agregartarea);

    return parte1;
}

function seccion2() {
    const parte2 = document.createElement("div");
    parte2.classList.add("parte2");
    return parte2;
}

function seccion3() {
    const parte3 = document.createElement("div");
    parte3.classList.add("parte3");
    const informacion = document.createElement("div");
    informacion.classList.add("informacion1");
    const pendientes = document.createElement("p");
    pendientes.classList.add("pendientes");
    const completadas = document.createElement("p");
    completadas.classList.add("completadas");
    const botonesfiltro = document.createElement("div");
    botonesfiltro.classList.add("botonesfiltro");
    const todasfiltro = document.createElement("button");
    todasfiltro.classList.add("todasfiltro");
    todasfiltro.textContent = "Todas";
    const pendientesfiltro = document.createElement("button");
    pendientesfiltro.classList.add("pendientesfiltro");
    pendientesfiltro.textContent = "Pendientes";
    const completadasfiltro = document.createElement("button");
    completadasfiltro.classList.add("completadasfiltro");
    completadasfiltro.textContent = "Completadas";
    parte3.appendChild(informacion);
    informacion.appendChild(pendientes);
    informacion.appendChild(completadas);
    parte3.appendChild(botonesfiltro);
    botonesfiltro.appendChild(todasfiltro);
    botonesfiltro.appendChild(pendientesfiltro);
    botonesfiltro.appendChild(completadasfiltro);
    return parte3;
}

export function crearModal() {
    const modal = document.createElement("dialog");
    modal.id = "modal";
    const header_form = document.createElement("div");
    header_form.classList.add("header_form");
    const titular = document.createElement("p");
    titular.textContent = "Mis Tareas";
    const cerrar_modal = document.createElement("button");
    cerrar_modal.textContent = "X";

    const contenedor_formulario = document.createElement("div");
    const formulario = document.createElement("form");
    formulario.action = "";
    formulario.method = "post";
    formulario.classList.add("formulario");

    const info1 = document.createElement("div");
    const label1 = document.createElement("label");
    label1.setAttribute("for", "titulo");
    label1.textContent = "Titulo: ";
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "titulo";
    input1.name = "titulo";
    input1.required = true;

    const info2 = document.createElement("div");
    const label2 = document.createElement("label");
    label2.setAttribute("for", "descripcion");
    label2.textContent = "Descripcion: ";
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "descripcion";
    input2.name = "descripcion";
    input2.required = true;

    const info3 = document.createElement("div");
    const label3 = document.createElement("label");
    label3.setAttribute("for", "fecha");
    label3.textContent = "Fecha Limite: ";
    const input3 = document.createElement("input");
    input3.type = "date";
    input3.id = "fecha";
    input3.name = "fecha";
    input3.required = true;

    const info4 = document.createElement("div");
    const label4 = document.createElement("label");
    label4.setAttribute("for", "prioridad");
    label4.textContent = "Selecciona una opcion: ";
    const input4 = document.createElement("select");
    input4.id = "prioridad";
    input4.name = "prioridad";
    input4.required = true;
    const opciones = [
        { value: "Alta Prioridad", text: "Alta Prioridad" },
        { value: "Media Prioridad", text: "Media Prioridad" },
        { value: "Baja Prioridad", text: "Baja Prioridad" },
    ];

    opciones.forEach((elemento) => {
        const opcion = document.createElement("option");
        opcion.value = elemento.value;
        opcion.text = elemento.text;
        input4.appendChild(opcion);
    });

    const botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Guardar";

    modal.appendChild(header_form);
    header_form.appendChild(titular);
    header_form.appendChild(cerrar_modal);
    modal.appendChild(contenedor_formulario);
    contenedor_formulario.appendChild(formulario);
    formulario.appendChild(info1);
    info1.appendChild(label1);
    info1.appendChild(input1);
    formulario.appendChild(info2);
    info2.appendChild(label2);
    info2.appendChild(input2);
    formulario.appendChild(info3);
    info3.appendChild(label3);
    info3.appendChild(input3);
    formulario.appendChild(info4);
    info4.appendChild(label4);
    info4.appendChild(input4);
    formulario.appendChild(botonEnviar);
    document.body.appendChild(modal);

    cerrar_modal.addEventListener("click", () => {
        modal.close();
    });

    return modal;
}

export function añadirTarjeta(array, tarea) {
    const contenedor_tarjetas = document.querySelector(".parte2");
    const tarjetas = document.createElement("div");
    tarjetas.dataset.id = tarea.id;
    const check = document.createElement("div");
    check.classList.add("check");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("clickeado");
    if (tarea.estado === "completado") {
        checkbox.checked = true;
        tarjetas.style.textDecoration = "line-through";
    }
    const titulo_descripcion = document.createElement("div");
    titulo_descripcion.classList.add("informacion");
    const nombretarea = document.createElement("h2");
    nombretarea.textContent = tarea.titulo;
    const descripciontarea = document.createElement("p");
    descripciontarea.textContent = tarea.descripcion;
    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    const fechaicono = document.createElement("img");
    fechaicono.src = calendario;
    const fechaformato = document.createElement("h3");
    fechaformato.textContent = "Fecha: " + tarea.fecha;
    const prioridad = document.createElement("div");
    prioridad.classList.add("prioridad");
    const nivelprioridad = document.createElement("p");
    nivelprioridad.textContent = tarea.prioridad;
    const borrar = document.createElement("div");
    borrar.classList.add("borrar");
    const botonborrar = document.createElement("button");
    const borraricono = document.createElement("img");
    borraricono.src = borrarimagen;

    cambiarestado(checkbox, tarjetas, array);
    eliminarCarta(botonborrar, tarjetas, array);

    contenedor_tarjetas.appendChild(tarjetas);
    tarjetas.appendChild(check);
    check.appendChild(checkbox);
    tarjetas.appendChild(titulo_descripcion);
    titulo_descripcion.appendChild(nombretarea);
    titulo_descripcion.appendChild(descripciontarea);
    tarjetas.appendChild(fecha);
    fecha.appendChild(fechaicono);
    fecha.appendChild(fechaformato);
    tarjetas.appendChild(prioridad);
    prioridad.appendChild(nivelprioridad);
    tarjetas.appendChild(borrar);
    borrar.appendChild(botonborrar);
    botonborrar.appendChild(borraricono);
}
