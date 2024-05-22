function parOImpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];
      const mensaje = numero % 2 === 0 ? 'És parell' : 'És imparell';
      console.log(`${numero}: ${mensaje}`);
    }
  }
  

  parOImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  