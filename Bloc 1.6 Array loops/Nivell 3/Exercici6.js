// Bloc 1.6: Array loops  Nivell 3
/*
Exercici 6
for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): 
let noms = ['Anna', 'Bernat', 'Clara']

English:
for-of with index: Use a for-of loop to print each element of the array and its position (index) to the console:
let noms = ['Anna', 'Bernat', 'Clara']

*/
let noms = ['Anna', 'Bernat', 'Clara'];

for (let [index, nom] of noms.entries()) {
    console.log(`${nom}, ${index}`);
}
