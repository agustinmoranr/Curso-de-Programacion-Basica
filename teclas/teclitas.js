//Objeto contenedor de los keyCodes de las teclas que harán el moviemiento
const teclas = {
    W: 87,
    A: 65,
    S: 83,
    D: 68
};
//

// Variables que determinan el punto inicial(centro) del canvas
var x = 150;
var y = 150;   
//

//evento que dispara la función dibujarTeclado al presionar alguna de las teclas dentro de la funcón
document.addEventListener('keydown', dibujarTeclado);
//

// Constantes contendoras del canvas y su contexto
const cuadrito = document.getElementById('area_de_dibujo');
const papel = cuadrito.getContext('2d');
//

//punto inicial
dibujarLinea('blue', x-1, y-1, x+1, y+1, papel);
//

//Funcion encargada de dibujar una línea
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;   
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}
//

//Función que se ejecuta al presionar una tecla y se encarga de dibujar una linea de tamaño "movimiento";
function dibujarTeclado(evento) {
    const colorcito = 'blue';
    var movimiento = 10; //Determina cuántos pixeles nos moveremos

    //Usando switch:
    //Sí evento.keyCode == case teclas.W:
    //Entonces se ejectura la funcion dibujarLinea
    //De igual forma funciona con los demas casos 
    switch(evento.keyCode) {
        case teclas.W:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento; //Hace que el codigo reuerde la ULTIMA posición en la que nos enontramos. 
            console.log('vamo pa arriba');
        break;  //Indica el fin de cada caso(condición)
        case teclas.A:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log('vamo pa la izquirda');
        break;
        case teclas.S:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log('vamo pa abajo');
        break;
        case teclas.D:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log('vamo pa la derecha');
        break;
        default:    // En caso de que no se cumpla ningun caso, ejecuta esta línea (es básicamente un else). 
        console.log('otra teclita');
        break;
    }
}
