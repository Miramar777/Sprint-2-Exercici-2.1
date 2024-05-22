// Bloc 1.6: Array loops Nivell 1
/*
Exercici 3
filter: Teniu una array de números. 
Utilitza filter per a crear una nova array que només contingui els números parells. 
let numeros = [1, 2, 3, 4, 5, 6];

English:
Use filter: You have an array of numbers. Use filter to create a new array 
that only contains the even numbers:

*/
let numeros = [1, 2, 3, 4, 5, 6];
let numerosParells = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosParells);


/* Alternative using for if 
let numeros = [1, 2, 3, 4, 5, 6];
let numerosParells = [];
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0) {
        numerosParells.push(numero);
    }
}
console.log(numerosParells); 
*/