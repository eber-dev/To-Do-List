import "./styles.css";
import { loadContainer } from "./display.js";
import { procesaDatos } from "./controller.js";
import { crearModal } from "./display.js";
import { eliminarTarea } from "./box.js";

loadContainer();
crearModal();

const añadir = document.getElementById("añadir");

añadir.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.showModal();
});

const seleccionformulario = document.querySelector(".formulario");
procesaDatos(seleccionformulario);
