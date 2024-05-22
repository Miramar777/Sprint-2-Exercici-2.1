// Bloc 1.5: Array transformations Nivell 2
/*
Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
Filtra els nombres majors o iguals a 10.
Multiplica cada nombre filtrat per 2.
Calcula la suma dels nombres filtrats i multiplicats per 2.
La funció ha de retornar el resultat de la suma.

English:
Given an array [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9], create a one-liner function that does the following:
Filters the numbers greater than or equal to 10.
Multiplies each filtered number by 2.
Calculates the sum of the filtered numbers multiplied by 2.
The function should return the sum result.
*/
let array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
let result = array.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);
console.log(result);