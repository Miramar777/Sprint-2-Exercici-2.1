 //Bloc 1.2 Operador ternari / Nivell 1
 //Exercici 2


  
function compararNumeros(num1, num2) {
    if (num1 === num2) {
        return 'Els dos nombres són iguals';
    }
    return num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
}

 /* Opcion  Flecha
const compararNumeros = (num1, num2) => {
    if (num1 === num2) {
        return 'Els dos nombres són iguals';
    }
    return num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
  };
  */
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById("numberone").value);
    const num2 = parseInt(document.getElementById("numbertwo").value);
    const resultat = compararNumeros(num1, num2);
    console.log("Resultat:", resultat);
    document.getElementById("result").innerText = `Resultat: ${resultat}`;
    });
    
