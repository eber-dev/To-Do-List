import añadir from "./images/add.svg";

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
    titulolistas.textContent = "Mis Tareas Pendientes";
    const agregartarea = document.createElement("button");
    const iconoagregar = document.createElement("img");
    iconoagregar.src = añadir;
    agregartarea.appendChild(iconoagregar);
    agregartarea.textContent = "Agregar";
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
        { value: "1", text: "Alta Prioridad" },
        { value: "2", text: "Media Prioridad" },
        { value: "3", text: "Baja Prioridad" },
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
}
