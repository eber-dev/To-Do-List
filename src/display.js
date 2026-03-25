import añadir from "./images/add.svg";

export function loadContainer() {
    const container = document.querySelector(".container");
    const titulo = document.querySelector(".titulo");
    const app = document.querySelector(".app");

    const cuadrolista = document.createElement("div");

    let primero = seccion1();
    let segundo = seccion2();
    let tercero = seccion3();

    container.appendChild(titulo);
    container.appendChild(app);
    app.appendChild(cuadrolista);
    cuadrolista.appendChild(primero);
    cuadrolista.appendChild(segundo);
    cuadrolista.appendChild(tercero);
}

function seccion1() {
    const parte1 = document.createElement("div");
    const titulolistas = document.createElement("h2");
    titulolistas.textContent = "Mis Tareas Pendientes";
    const agregartarea = document.createElement("button");
    const iconoagregar = document.createElement("img");
    iconoagregar.src = añadir;
    agregartarea.appendChild(iconoagregar);
    iconoagregar.textContent = "Agregar";
    parte1.appendChild(titulolistas);
    parte1.appendChild(agregartarea);
    return parte1;
}

function seccion2() {
    const parte2 = document.createElement("div");
    return parte2;
}

function seccion3() {
    const parte3 = document.createElement("div");
    const informacion = document.createElement("div");
    const pendientes = document.createElement("p");
    const completadas = document.createElement("p");
    const botonesfiltro = document.createElement("div");
    const todasfiltro = document.createElement("button");
    todasfiltro.textContent = "Todas";
    const pendientesfiltro = document.createElement("button");
    pendientesfiltro.textContent = "Pendientes";
    const completadasfiltro = document.createElement("button");
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
}
