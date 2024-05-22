//Bloc 1.4: Rest & Spread operators Nivell 1 Exercici 2
/* Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi 
l'operador rest per a acceptar un nombre indeterminat d'arguments 
i retornar la seva suma.

English:
Exercise 2
Rest Operator in Functions: Create a function suma that uses the rest 
operator to accept an indefinite number of arguments and return their sum.
*/

function suma(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(suma(1, 2, 3, 4, 5));
console.log(suma(16, 24, 3, 45, 35));