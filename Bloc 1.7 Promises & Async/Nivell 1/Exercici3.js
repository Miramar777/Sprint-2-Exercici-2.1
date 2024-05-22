// Bloc 1.7: Promises & Async/Await Nivell 1
/*
Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', 
i que la rebutgi si l'input és qualsevol altra cosa.

English:
Promise with reject: Create a promise that resolves after 2 seconds if the input is equal to 'Hello', 
and rejects it if the input is anything else.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let input = 'Hola'; 
        if (input === 'Hola') {
            resolve('Promise resolved');
        } else {
            reject(new Error('Promise rejected'));
        }
    }, 2000);
});

myPromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error.message); 
    });
