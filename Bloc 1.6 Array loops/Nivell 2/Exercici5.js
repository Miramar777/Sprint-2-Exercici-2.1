// Bloc 1.6: Array loops Nivell 2
/*
Exercici 5
for-of amb break: Teniu una array de números. 
Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, 
llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

English:
for-of with break: You have an array of numbers. Use a for-of loop to print the numbers to the console until you find the number 5, then stop the loop:
let numbers = [1, 2, 3, 4, 5, 6]; 
*/
let numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers) {
    console.log(number);
    if (number === 5) {
        break;
    }
}
