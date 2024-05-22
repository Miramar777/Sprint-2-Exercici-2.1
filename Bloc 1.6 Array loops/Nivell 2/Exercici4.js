// Bloc 1.6: Array loops Nivell 2
/*
Exercici 4
for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.


English:
Use for-in: You have an object with key-value pairs:let obj = { name: 'Ona', age: 25, city: 'Barcelona' };
Use a for-in loop to print each key and its corresponding value to the console.

*/
let obj = {name: 'Ona', age: 25, city: 'Barcelona'};
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}

