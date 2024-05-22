// Bloc 1.4: Rest & Spread operators Nivell 2
/*
Exercici 4
Rest en Destructuring: Crea una array amb diversos elements. 
Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, 
i després assignar la resta dels elements a una tercera variable.

English:
Exercise 4
Rest in Destructuring: Create an array with several elements. 
Use destructuring and the rest operator to assign the first two elements to variables, 
and then assign the rest of the elements to a third variable.
*/
const array = [1, 2, 3, 4, 5];

const [primerElement, segonElement, ...restElements] = array;

console.log(primerElement);
console.log(segonElement);
console.log(restElements);


