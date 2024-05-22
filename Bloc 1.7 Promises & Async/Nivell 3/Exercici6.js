// Bloc 1.7: Promises & Async/Await Nivell 3
/*
Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

English:
Promise.all: Create two promises that resolve after 2 and 3 seconds, respectively. 
Use Promise.all to wait for both promises to resolve, and print the results to the console.

*/
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved');
    }, 3000);
});

Promise.all([promise1, promise2])
    .then((results) => {
        console.log(results); 
    });


    /*
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });
*/