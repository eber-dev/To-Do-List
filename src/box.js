export let almacen = JSON.parse(localStorage.getItem("local")) || [];

export function agregarTarea(objeto) {
    almacen.push(objeto);
    return almacen;
}

export function eliminarTarea(objeto) {
    almacen.forEach((elemento, indice) => {
        if (elemento.id == objeto.id) {
            almacen.splice(indice, 1);
        }
    });
}

export function mostrarAlmacen() {
    return almacen;
}
