// módulo de filesystem o fs
const fs = require('fs/promises'); // es similar al import fs from 'fs';
const path = require('path');

// C:\Users\jlast\OneDrive\Escritorio\RAGS\ACADEMLO\modulo NODE\MOD AGO 2021\23-08-2021>\requerimientos.txt
const requirementsPath = path.resolve('requerimientos.txt');
const writingPath = path.resolve('writeQuery.txt');
// console.log(requirementsPath); ==> esta es la ruta del archivo el cual path.resolve busca y resuelve.

//Método para leer un archivo
// ||| UTILIZANDO CALLBACKS

fs.readFile(requirementsPath, "utf-8", (error, data) => { //En las funciones de Node siempre va primero el error y luego los datos
    if(!error){
        return console.log(data);
    }
    // !error ? console.log(data) : console.log(error); ==> También funciona con operadores ternarios

    return console.log(error);
});

fs.writeFile(writingPath, "Hello World", (error) => {
    if(error){
        return console.log("No pudimos leer el archivo");
    }
    return;
});

// ||| UTILIZANDO PROMESAS Y ASYNC/AWAIT

fs.readFile(requirementsPath, "utf-8")
    .then(data => console.log(data))
    .catch(error => console.log(error));

(async () => {
    try {
        const data = await fs.readFile(requirementsPath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();