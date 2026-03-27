import { agregarTarea } from "./box.js";
import { almacen } from "./box.js";

export function procesaDatos(formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const tarea0 = Object.fromEntries(new FormData(e.target));
        let tarea1 = {
            id: crypto.randomUUID().slice(0, 6),
            ...tarea0,
        };
        agregarTarea(tarea1);
        resetearmodal(formulario);
        let local = almacenamientolocal();
        return local;
    });
}

function resetearmodal(formulario) {
    formulario.reset();
    const modal = document.getElementById("modal");
    modal.close();
}

function almacenamientolocal() {
    localStorage.setItem("almacenamiento", JSON.stringify(almacen));
    let lit = localStorage.getItem("almacenamiento");
    return lit;
}

export function cambiarestado(checkbox) {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            return true;
        } else {
            return false;
        }
    });
}
