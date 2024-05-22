// Bloc 1.7: Promises & Async/Await nIVELL 1
/*
Exercici 2
Utilització d'una Promesa: 
Utilitza la promesa creada en l'exercici anterior. 
Crea un .then que imprimeixi el resultat a la consola.

English:
Using a Promise: 
Use the promise created in the previous exercise. 
Create a .then that prints the result to the console.
*/

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

myPromise.then((result) => {
    console.log(result);
});