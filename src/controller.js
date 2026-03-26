export function obtenerDatos() {
    const seleccionformulario = document.querySelector(".formulario");
    seleccionformulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const tarea = Object.fromEntries(new FormData(e.target));
        alert(JSON.stringify(tarea));
    });
}
