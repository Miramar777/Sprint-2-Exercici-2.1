//Bloc 1.5: Array transformations Nivell 3
/*
Exercici 6
Every / Some: Usa every i some per a determinar 
si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

English:
Use every and some to determine if all or some of the elements in the array [11, 12, 13, 14] 
are greater than 10, respectively.
*/


let numeros = [11, 12, 13, 14];
let totsElementsMajorQueDeu = numeros.every(function(element) {
    return element > 10;
});
console.log(totsElementsMajorQueDeu); 
let algunsElementsMajorQueDeu = numeros.some(function(element) {
    return element > 10;
})
console.log(algunsElementsMajorQueDeu); 


/* alternative / arrow function

let numeros = [11, 12, 13, 14];
let totsElementsMajorQueDeu = numeros.every(element => element > 10);
let algunsElementsMajorQueDeu = numeros.some(element => element > 10);

console.log(totsElementsMajorQueDeu); 
console.log(algunsElementsMajorQueDeu); 
*/