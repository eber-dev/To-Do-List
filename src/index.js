import "./styles.css";
import { loadContainer } from "./display.js";
import { obtenerDatos } from "./controller.js";
import { crearModal } from "./display.js";

loadContainer();
crearModal();

const añadir = document.getElementById("añadir");

añadir.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.showModal();
});
obtenerDatos();
