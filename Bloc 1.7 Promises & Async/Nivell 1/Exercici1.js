// Bloc 1.7: Promises & Async/Await Nivell 1
/*
Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

English:
Creating a Promise: Create a promise that resolves after 2 seconds and returns the string 'Hello, world'.
*/
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

myPromise.then((result) => {
    console.log(result);
});
