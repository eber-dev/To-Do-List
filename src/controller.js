import { agregarTarea } from "./box.js";
import { almacen } from "./box.js";
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
        agregarTarea(tarea1);
        let local = almacenamientolocal(almacen);
        resetearmodal(formulario);
        añadirTarjeta(local);
        return local;
    });
}

function resetearmodal(formulario) {
    formulario.reset();
    const modal = document.getElementById("modal");
    modal.close();
}

function almacenamientolocal(arreglo) {
    localStorage.setItem("almacenamiento", JSON.stringify(arreglo));
    let lit = JSON.parse(localStorage.getItem("almacenamiento"));
    return lit;
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
            almacenamientolocal(array);
        } else {
            carta.style.textDecoration = "none";
            array.forEach((element) => {
                if (carta.dataset.id == element.id) {
                    element.estado = "pendiente";
                }
            });
            almacenamientolocal(array);
        }
    });
}
