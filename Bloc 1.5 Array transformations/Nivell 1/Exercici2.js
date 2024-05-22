// Bloc 1.5: Array transformations Nivell 1
/*
Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

English:
Filter: You have an array of numbers [1, 2, 3, 4]. Create a new array that contains only the even numbers.
*/

let array = numeros = [1, 2, 3, 4];
let numerosParells = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosParells);



