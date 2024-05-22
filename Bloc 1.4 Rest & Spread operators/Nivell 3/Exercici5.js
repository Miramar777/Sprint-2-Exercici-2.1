// Bloc 1.4: Rest & Spread operators Nivell 3 
/*
Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. 
Després, crea una array amb tres elements i crida la funció utilitzant 
l'operador spread amb aquesta array.

English:
Exercise 5
Spread in Functions: Create a function that accepts three arguments. 
Then, create an array with three elements and call the function using 
the spread operator with this array.
*/
function myFunction(a, b, c) {
console.log(a);
console.log(b);
console.log(c);
}

const array = [1, 2, 3];

myFunction(...array);
