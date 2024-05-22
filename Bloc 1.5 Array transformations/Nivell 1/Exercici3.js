//  Bloc 1.5: Array transformations Nivell 1

/*Exercici 3 
Find: Teniu una array de números [1, 10 , 8, 11]. 
Utilitza la funció find per a trobar el primer número que és major a 10.

English:
You have an array of numbers [1, 10, 8, 11].
Use the find function to locate the first number that is greater than 10.
*/



let numeros = [1, 10, 8, 11];
let numeroMajoraDeu = numeros.find(function(numero) {
    return numero > 10;
});
console.log(numeroMajoraDeu);




/* using arrow function:

let numeros = [1, 10, 8, 11];
let numeroMajoraDeu = numeros.find(numero => numero > 10);
console.log(numeroMajoraDeu);
*/