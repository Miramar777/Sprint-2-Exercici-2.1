function esperarISaludar(nom, callback) {
    setTimeout(() => {
      callback(nom);
    }, 2000);
  }
  
  function saludar(nom) {
    console.log(`Hola, ${nom}!`);
  }
  
  esperarISaludar('Mira', saludar);
  
