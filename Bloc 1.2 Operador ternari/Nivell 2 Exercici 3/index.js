  //Bloc 1.2 Operador ternari  Nivell 2 
  //Exercici 3

  /*
  const determinarPositivoNegativoZero = (num) => {
    return num > 0 ? 'Positiu' : num < 0 ? 'Negatiu' : 'Zero';
  };
  */
 
  function determinarPositivoNegativoZero(num) {
    return num > 0 ? 'Positiu' : num < 0 ? 'Negatiu' : 'Zero';
}
document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
    const num = parseInt(document.getElementById("numberone").value);
    const resultat1 = determinarPositivoNegativoZero(num);
    console.log(`El número ${num} és: ${resultat1}`);
    document.getElementById("resultat1").innerText = `El número és: ${resultat1}`;
});


//Trobar Maxim
function trobarMaxim(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault();
    const a = parseInt(document.getElementById("numbera").value);
    const b = parseInt(document.getElementById("numberb").value);
    const c = parseInt(document.getElementById("numberc").value);
    const resultat2 = trobarMaxim(a, b, c);
    document.getElementById("resultat2").innerText = `El nombre màxim és: ${resultat2}`;
    console.log(`Els nombres introduïts són a: ${a}, b: ${b}, c: ${c}. El nombre màxim és: ${resultat2}`);
});

  