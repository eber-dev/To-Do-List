import "./styles.css";
import { loadContainer } from "./display.js";
import { procesaDatos, renderizar } from "./controller.js";
import { crearModal } from "./display.js";
import { filtrartodo, filtrarcompletados, filtrarpendientes } from "./controller.js";

loadContainer();
crearModal();

const añadir = document.getElementById("añadir");

añadir.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.showModal();
});

const seleccionformulario = document.querySelector(".formulario");
procesaDatos(seleccionformulario);

const parte2 = document.querySelector(".parte2");

const todasfiltro = document.querySelector(".todasfiltro");
const pendientesfiltro = document.querySelector(".pendientesfiltro");
const completadasfiltro = document.querySelector(".completadasfiltro");

todasfiltro.addEventListener("click", () => {
    parte2.textContent = "";
    filtrartodo();
});
pendientesfiltro.addEventListener("click", () => {
    parte2.textContent = "";
    filtrarpendientes();
});
completadasfiltro.addEventListener("click", () => {
    parte2.textContent = "";
    filtrarcompletados();
});

renderizar();
