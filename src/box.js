export let almacen = [];

export function agregarTarea(objeto) {
    almacen.push(objeto);
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
