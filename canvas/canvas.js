var cantidad = document.getElementById('cantidad_lineas');
var circulo = document.getElementById('circulito');
var boton = document.getElementById('botoncito')
var azul = document.getElementById('azulito')
var rosa = document.getElementById('rosita')
var amarillo = document.getElementById('amarillo')
var dibujo = document.getElementById('dibujito');
var lienzo = dibujo.getContext('2d');

function plasmarDibujo() {
    var ancho = dibujo.width
    var lineas = parseInt(cantidad.value);
    var lineasCirculo = parseInt(circulo.value);
    var espacio = ancho/lineas;
    var espaciesito = 100/lineasCirculo
    var yi, xf;
    var xi, yf;
    
    //console.log(azulado);
// función encargada de dibujar 1 línea.
// if (getBlue == true) {

// }

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}
//    
    for(lineaInicial = 0; lineaInicial < lineas; lineaInicial++) {
        yi = lineaInicial * espacio;
        xf = (lineaInicial + 1) * espacio;
        dibujarLinea('#0000FF', 0, yi, xf, 300);
        console.log(lineaInicial);
    }
    
    for(lineaInicial = 0; lineaInicial < lineas; lineaInicial++) {
        xi = lineaInicial * espacio;
        yf = (lineaInicial + 1) * espacio;
        dibujarLinea('#0000FF', xi, 0, 300, yf);
    }

// ciclos encargados de formar la figura cuadrada interna
    for(lineaInicial = 0; lineaInicial < lineasCirculo; lineaInicial++) {
        yi = (lineaInicial * espaciesito) + 100;
        xf = (lineaInicial * espaciesito) + 100;
        dibujarLinea('#0000FF', 100, yi, xf, 200);
        console.log(lineaInicial);
    }

    for(lineaInicial = 0; lineaInicial < lineasCirculo; lineaInicial++) {
        yi = (lineaInicial * espaciesito) + 100;
        xf = (lineaInicial * -espaciesito) + 200;
        dibujarLinea('#0000FF', 200, yi, xf, 200);
        console.log(lineaInicial);
    }

    for(lineaInicial = 0; lineaInicial < lineasCirculo; lineaInicial++) {
        yi = (lineaInicial * -espaciesito) + 200;
        xf = (lineaInicial * espaciesito) + 100;
        dibujarLinea('#0000FF', 100, yi, xf, 100);
        console.log(lineaInicial);
    }
    for(lineaInicial = 0; lineaInicial < lineasCirculo; lineaInicial++) {
        xi = (lineaInicial * espaciesito) + 100;
        yf = (lineaInicial * espaciesito) + 100;
        dibujarLinea('#0000FF', xi, 100, 200, yf);
        console.log(lineaInicial);
    }
//
    
// líneas que unen vértices    
    dibujarLinea('#0000FF', 0, 0, 77, 222);
    dibujarLinea('#0000FF', 0, 0, 222, 77);
   dibujarLinea('#0000FF', 0, 0, 100, 100);

   dibujarLinea('#0000FF', 200, 200, 300, 300);
    dibujarLinea('#0000FF', 77, 222, 300, 300);
    dibujarLinea('#0000FF', 222, 77, 300, 300);

    dibujarLinea('#0000FF', 222, 77, 200, 100);
    dibujarLinea('#0000FF', 77, 222, 100, 200);

// líneas de los bordes de la figura interna del canvas    
    dibujarLinea('#0000FF', 100, 100, 200, 100);
    dibujarLinea('#0000FF', 200, 100, 200, 200);
    dibujarLinea('#0000FF', 200, 200, 100, 200);
    dibujarLinea('#0000FF', 100, 200, 100, 100);
    
//líneas de los bordes del canvas
    dibujarLinea('#0000FF', 1, 1, 1, 299);
    dibujarLinea('#0000FF', 1, 299, 299, 299); 
    dibujarLinea('#0000FF', 1, 1, 299, 1); 
    dibujarLinea('#0000FF', 299, 1, 299, 299); 
}
//evento que se dispara al presionar el boton

boton.addEventListener('click', plasmarDibujo);

