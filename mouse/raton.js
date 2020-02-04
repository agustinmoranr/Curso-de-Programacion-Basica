const areaDeDibujo = document.getElementById('cuadrito');
const papel = areaDeDibujo.getContext('2d');

// [ En este caso los 'escuchadores de eventos' están sobre el canvas (alias "areaDeDibujo") para que dichos
// eventos ocurran solo sobre el mismo canvas y así evitar que las líneas se tracen en todo el .document ]

areaDeDibujo.addEventListener('mousedown', presionarClick);
//evento encargado de determinar si el click ESTA siendo pulsando.

areaDeDibujo.addEventListener('mousemove', dibujarMouse); 
//evento encargado de trazar puntos en funcion del movimiento del mouse mientras esta siendo pulsado

areaDeDibujo.addEventListener('mouseup', levantarClick);
//evento encargado de determinar si el click NO esta siendo pulsado 

var toClick; //Variable que determinará si el click esta siendo presionado
var colorcito = 'blue';
var xi, yi, xf, yf; //coordenadas

function presionarClick(evento) {
    toClick = true;
    // var xi = evento.offsetX;
    // var yi = evento.offsetY;
    // console.log('punto inicial en X: ' + xi + ' punto inicial en Y: ' + yi);
}   

function levantarClick(evento) {
    toClick = false;
    // var xf = evento.offsetX;
    // var yf = evento.offsetY;
    // console.log('Punto final en x: ' + xf + ' Punto final en y: ' + yf);
}

// para entender la siguiente función, primero hay que definir que es el metodo .offset(X/Y)
// basicamente se encarga de establecer las coordenadas en X o en Y dependiendo del evento que ocurre.
// por ejemplo en el evento "mousedown" determina las coordenadas del punto donde se deja de hacer click
// sobre el canvas. En cambio en el evento "mousemove" determina las coordenadas de todos los puntos por donde
// pasa el puntero.  

// Ahora, al hacer click sobre el canvas Y MOVERSE EL CURSOR, se activa el evento "mousemove" que llama a esta función.
// Entonces xf toma el valor de evento.offsetX y lo mismo con yf siendo igual al valor del evento.offsetY
// Por lo que el primero punto no se traza, pues aún el valor de xi y yi estan "undefined", es hasta
// que te mueves un pixel que xi y yi toman el valor de .offset, por lo que dibujarLinea adquiere todos sus
// valores necesarios dibujando así un trazo. 
// También es por eso que con este método no se puede dibujar un punto haciendo un simple click, pues
// el valor de xi y yi no existen hasta que se realiza algun moviento.
function dibujarMouse(evento) {
    xf = evento.offsetX; 
    yf = evento.offsetY;
    if(toClick == true) {
        dibujarLinea(colorcito, xi, yi, xf, yf, papel);
    } 
    xi = xf; // La misión de estas variables es la de definir que xi & yi = xf & yf 
    yi = yf; // pues de esta forma se tranzaran multiples puntos.
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;   
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);    
    lienzo.stroke();
    lienzo.closePath();
}