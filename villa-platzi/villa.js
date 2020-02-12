//Esta función recibé como parámetros a min y maxi y u función es la ejecutar un algoritmo
//que retorna un valor al hazar comprendido entre min y maxi 
function aleatorio(min, maxi) {
    var resultado; 
    resultado = Math.floor(Math.random()* (maxi - min + 1)) + min;
    return resultado; 
}
//

var numero_aleatorio; // Almacena el número aleatorio producto de ejecutar la función aleatorio()

// For encargado de generar una cierta canitdad de números aletarorios.
for(var i=0; i<10; i++) { 
    numero_aleatorio = aleatorio(-3, 20);
    document.write(numero_aleatorio + ', ');
    console.log(numero_aleatorio);
}

