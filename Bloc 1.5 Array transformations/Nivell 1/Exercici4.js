// Bloc 1.5: Array transformations Nivell 1
/*
Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. 
Fes servir la funció reduce per a calcular la suma total dels números.

English:
Reduce: You have an array of numbers [13, 7, 8, 21]. 
Use the reduce function to calculate the total sum of the numbers.
*/

let numeros = [13, 7, 8, 21];
let suma = numeros.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(suma);
