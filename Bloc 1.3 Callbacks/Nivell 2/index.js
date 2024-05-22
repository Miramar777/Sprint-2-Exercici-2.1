function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  

  const numeros = [1, 2, 3, 4, 5];
  
  function callbackMostrar(numero) {
    console.log(numero);
  }
  
  processarElements(numeros, callbackMostrar);
  