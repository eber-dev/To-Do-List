import { agregarTarea, almacen } from "./box.js";
import { añadirTarjeta } from "./display.js";

export function procesaDatos(formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const tarea0 = Object.fromEntries(new FormData(e.target));
        let tarea1 = {
            id: crypto.randomUUID().slice(0, 6),
            ...tarea0,
            estado: "pendiente",
        };
        let nuevo = agregarTarea(tarea1);
        resetearmodal(formulario);
        añadirTarjeta(nuevo, tarea1);
        añadirlocalstorage("local", nuevo);
        obtenerInformacion(nuevo);
    });
}

function resetearmodal(formulario) {
    formulario.reset();
    const modal = document.getElementById("modal");
    modal.close();
}

function añadirlocalstorage(clave, array) {
    localStorage.setItem(clave, JSON.stringify(array));
}

export function cambiarestado(checkbox, carta, array) {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            carta.style.textDecoration = "line-through";
            array.forEach((element) => {
                if (carta.dataset.id == element.id) {
                    element.estado = "completado";
                }
            });
            añadirlocalstorage("local", array);
            obtenerInformacion(array);
        } else {
            carta.style.textDecoration = "none";
            array.forEach((element) => {
                if (carta.dataset.id == element.id) {
                    element.estado = "pendiente";
                }
            });
            añadirlocalstorage("local", array);
            obtenerInformacion(array);
        }
    });
}

export function eliminarCarta(boton, carta, array) {
    boton.addEventListener("click", () => {
        carta.remove();
        array.forEach((elemento, indice) => {
            if (elemento.id == carta.dataset.id) {
                array.splice(indice, 1);
            }
        });
        console.log(array);
        añadirlocalstorage("local", array);
        obtenerInformacion(array);
    });
}

export function renderizar() {
    almacen.forEach((elemento) => {
        añadirTarjeta(almacen, elemento);
        if (elemento.estado == "completado") {
            tachado();
        }
    });
    obtenerInformacion(almacen);
}

function tachado() {
    const check = document.querySelectorAll(".clickeado");
    check.forEach((elemento) => {
        elemento.checked = true;
    });
}

function obtenerInformacion(arregloactual) {
    let completos = 0;
    let pendientes = 0;
    const tareapendiente = document.querySelector(".pendientes");
    const tareacompletada = document.querySelector(".completadas");

    arregloactual.forEach((elemento) => {
        if (elemento.estado == "completado") {
            completos++;
        } else if (elemento.estado == "pendiente") {
            pendientes++;
        }
    });

    tareapendiente.textContent = pendientes + "pendientes";
    tareacompletada.textContent = completos + "completadas";
}
