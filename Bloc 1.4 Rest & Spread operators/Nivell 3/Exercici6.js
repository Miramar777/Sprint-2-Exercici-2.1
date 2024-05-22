// Bloc 1.4: Rest & Spread operators Nivell 3
/*
Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

English:
Exercise 6
Merging Objects with Spread: Create two objects with different properties. 
Use the spread operator to merge these two objects into a new one.
*/

let object1 = {color: 'red', shape: 'circle'};
let object2 = {size: 'big', material: 'metalic'};

let mergedObject = { ...object1, ...object2};

console.log(mergedObject);

