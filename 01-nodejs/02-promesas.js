const fs = require("fs");
function promesaEsPar(numero) {
  miPrimePromesa = new Promise((resolve, reject) => {
    if (typeof numero !== "number") {
      reject(new Error("El valor no es un número"));
    } else if (numero % 2 === 0) {
      resolve(numero);
    } else {
      reject(new Error("El número no es par"));
    }
  });
  return miPrimePromesa;
}
function promesaElevarAlCuadrado(numero) {
  return new Promise((res) => res(numero * numero));
}

promesaEsPar(4)
  .then((respuestaEsPar) => {
    console.log("Es par", respuestaEsPar);
    return promesaElevarAlCuadrado(respuestaEsPar);
  })
  .then((respuestaElevarCuadrado) => {
    console.log("Elevado: ", respuestaElevarCuadrado);
  })
  .catch((respuestaError) => {
    console.log("NO ES PAR", respuestaError);
  });
function leerArchivoPromesa(nombreArchivo) {
  return new Promise((res, rej) => {
    fs.readFile(nombreArchivo, "utf-8", (errorLectura, contenido) => {
      if (errorLectura) {
        rej(errorLectura);
      } else {
        res(contenido);
      }
    });
  });
}

// Ejemplo de uso:
leerArchivoPromesa("./a.txt")
  .then((contenido) => {
    console.log("Contenido del archivo:", contenido);
  })
  .catch((error) => {
    console.log("Error al leer el archivo:", error);
  });
// REGLAS:
// 1. Estamos dentro de una función nombrada, anonima o fat arrow
// 2. Agregar la palabra reservada 'async' antes de la función
// 3. Agregar 'AWAIT' dentro de un bloque TRY CATCH antes de la promesa
async function correrLogicaPromesas() {
    try {
        const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1. Respuesta archivo', respuestaLeerArchivo);
        const respuestaLeerArchivo2 = await leerArchivoPromesa('./a.txt');
        console.log('2. Respuesta archivo', respuestaLeerArchivo2);
        await leerArchivoPromesa('./a123.txt')
    } catch (error) {
        console.log('3. Error archivo', error);
        
    }
}
 