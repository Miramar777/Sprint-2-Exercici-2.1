function calculadora(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  function sumar(a, b) {
    return a + b;
  }
  
  const resultat = calculadora(5, 3, sumar);
  console.log(`El resultat de la suma és: ${resultat}`); 
  