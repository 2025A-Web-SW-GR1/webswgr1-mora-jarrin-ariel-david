//Estamos en en lado del servidor
const fs = require('fs');
console.log("Primero");
fs.readFile(
    './a.txt',
    'utf8',
    (errorLectura, contenido) => { //callback
        // Este código se ejecuta cuando se completa la lectura del archivo
        if (errorLectura) {
            console.error("Error al leer el archivo:", errorLectura);
        } else {
            console.log("Tercero 2.1", contenido);
        }
    }
)
fs.writeFile(
    './a.txt',
    'Hola mundo'+ new Date().toISOString(),
    (errorEscritura) => { //callback
        // Este código se ejecuta cuando se completa la escritura del archivo
        if (errorEscritura) {
            console.error("Error al escribir en el archivo:", errorEscritura);
        } else {
            console.log("Archivo escrito correctamente");
        }
    }
)
console.log("Segundo");