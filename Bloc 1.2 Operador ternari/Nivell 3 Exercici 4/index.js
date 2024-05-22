  
  // Nivell 3 
  //Exercici 4
  const parOImpar = (numeros) => {
    for (let numero of numeros) {
      const mensaje = numero % 2 === 0 ? 'És parell' : 'És imparell';
      console.log(`${numero}: ${mensaje}`);
    }
  };
  

  parOImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  




