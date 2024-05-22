//Bloc 1.1: Arrow functions 
//Exercici 1
const add = (a, b) => a + b;

document.getElementById("form").addEventListener("submit", function(event) {
event.preventDefault();
const a = parseInt(document.getElementById("anumber").value);
const b = parseInt(document.getElementById("bnumber").value);
const resultat = add(a, b);
console.log("Resultat:", resultat);
document.getElementById("result").innerText = `Resultat: ${resultat}`;
});














  






  