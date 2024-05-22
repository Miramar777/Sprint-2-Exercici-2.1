function processarCadena(cadena, callback) {
    let cadenaMajuscules = cadena.toUpperCase();
callback(cadenaMajuscules);
}

processarCadena("Hello Mira!", function(transformada) {
    console.log(transformada);
});