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

function accederlocalstorage(clave) {
    return JSON.parse(localStorage.getItem(clave));
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
            console.log(array);
            añadirlocalstorage("local", array);
        } else {
            carta.style.textDecoration = "none";
            array.forEach((element) => {
                if (carta.dataset.id == element.id) {
                    element.estado = "pendiente";
                }
            });
            console.log(array);
            añadirlocalstorage("local", array);
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
    });
}

export function renderizar() {
    almacen.forEach((elemento) => {
        añadirTarjeta(almacen, elemento);
    });
}
