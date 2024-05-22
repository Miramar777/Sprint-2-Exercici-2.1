 //Bloc 1.2: Operador ternari 
//Exercici 1
const potConduir = (edat) => {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
  };

  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const edat = parseInt(document.getElementById("edat").value);
    const resultat = potConduir(edat);
    console.log("Resultat:", resultat);

    document.getElementById("result").innerText = `Resultat: ${resultat}`;
    });
    