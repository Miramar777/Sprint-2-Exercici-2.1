//Bloc 1.4: Rest & Spread operators Nivell 2 
/*
Exercici 3
Copiant objectes amb Spread: Crea un objecte 'objecte1'. 
Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. 
Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

English
Exercise 3
Copying objects with Spread: Create an object 'objecte1'. 
Then create a second object, 'objecte2', which is a copy of 'objecte1' using the spread operator. 
Change a property of 'objecte2' and verify that 'objecte1' has not changed.

*/

const objecte1 = {
propietat1: 'red',
};

const objecte2 = {
...objecte1
};

objecte2.propietat1 = 'blue';


console.log(objecte1);
console.log(objecte2);