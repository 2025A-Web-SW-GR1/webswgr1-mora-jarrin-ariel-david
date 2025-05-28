//Unicamente con callbacks 
const fs = require('fs');

fs.readFile('./a.txt', 'utf8', (errorLectura, contenido) => {
  if (errorLectura) {
    console.error("Error al leer el archivo:", errorLectura);
    return;
  }
  const nuevoContenido = contenido + "\n"+new Date().toString();
  fs.writeFile('./a.txt', nuevoContenido, (errorEscritura) => {
    if (errorEscritura) {
      console.error("Error al escribir el archivo:", errorEscritura);
    } else {
      console.log("Ejemplo realizado con callbacks");
      console.log("Contenido del archivo:\n", nuevoContenido);
    }
  });
});
//Promesas "then y catch"
const fsPromises = require('fs');
function leerArchivoPromesa(nombreArchivo) {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(nombreArchivo, 'utf8', (errorLectura, contenido) => {
      if (errorLectura) {
        reject(errorLectura);
      } else {
        resolve(contenido);
      }
    });
  });
}
function escribirArchivoPromesa(nombreArchivo, datos) {
  return new Promise((res, rej) => {
    fs.writeFile(nombreArchivo, datos, (errorEscritura) => {
      if (errorEscritura) {
        rej(errorEscritura);
      } else {
        res();
      }
    });
  });
}

leerArchivoPromesa('./a.txt')
  .then(contenido => {
    const nuevoContenido = contenido + '\n' + new Date().toString();
    return escribirArchivoPromesa('./a.txt', nuevoContenido)
      .then(() => nuevoContenido);
  })
  .then(nuevoContenido => {
    console.log("Ejemplo de promesas con then y catch");
    console.log("Contenido del archivo:\n", nuevoContenido);
  })
  .catch(error => {
    console.error("Error en lectura o escritura:", error);
  });
//Async/Await
async function leerEscribirArchivoAsync(nombreArchivo) {
  try {
    const contenido = await leerArchivoPromesa(nombreArchivo);
    const nuevoContenido = contenido + '\n' + new Date().toString();
    await escribirArchivoPromesa(nombreArchivo, nuevoContenido);
    
    console.log("Ejemplo de async/await");
    console.log("Contenido del archivo:\n", nuevoContenido);
  } catch (error) {
    console.error("Error al leer o escribir el archivo:", error);
  }
}
leerEscribirArchivoAsync('./a.txt');
