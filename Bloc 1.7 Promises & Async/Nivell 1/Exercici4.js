// Bloc 1.7: Promises & Async/Await Nivell 1
/*
Exercici 4
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada 
a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

English:
Use async/await: Write an asynchronous function that uses the await keyword to wait for the result of the promise created 
in Exercise 1, and then prints this result to the console.
*/
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

async function printResult() {
        let result = await myPromise;
        console.log(result); 
}

printResult();