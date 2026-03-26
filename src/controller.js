export function obtenerDatos() {
    const seleccionformulario = document.querySelector(".formulario");
    seleccionformulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const tarea0 = Object.fromEntries(new FormData(e.target));
        let tarea1 = {
            id: crypto.randomUUID().slice(0, 6),
            ...tarea0,
        };

        alert(JSON.stringify(tarea1));
    });
}
