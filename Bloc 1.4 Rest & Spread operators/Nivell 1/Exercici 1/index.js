//Bloc 1.4: Rest & Spread operators Nivell 1 Exercici 1

/* Exercici 1
   Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
   Utilitza l'operador spread per a crear una tercera array que contingui 
   tots els elements de array1 i array2. 

   English:
   Spread Operator in Arrays: Create two arrays, array1 and array2. 
   Use the spread operator to create a third array that contains all the 
   elements from array1 and array2.
   */

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, ...array2];
console.log(array3);
