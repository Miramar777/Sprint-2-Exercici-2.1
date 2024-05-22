// Bloc 1.7: Promises & Async/Await Nivell 1
/*
Exercici 5
Gestió d'errors amb async/await: 
Modifica la funció de l'exercici 4 per a que capturi qualsevol possible 
error utilitzant un bloc try/catch.

English:
Error Handling with async/await: Modify the function from Exercise 4 
to capture any potential errors using a try/catch block.

*/

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

async function printResult() {
    try {
        let result = await myPromise;
        console.log(result); 
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

printResult();
