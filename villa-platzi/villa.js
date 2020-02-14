var vp = document.getElementById('villaPlatzi');
var papel = vp.getContext('2d'); 


//Este es un objeto literal, que lleva la sintaxis de json (javascript object notation).
var fondo = {
    url: './img/tile.png', // Atributo 'Url' de la imagen.
    cargaOk: false // Esta variable se encarga de determinar cuando la imagen ya esta cargada en el evento load.
};

var vaca = {
    url: './img/vaca.png',
    cargaOk: false
};

var cerdo = {
    url: './img/cerdo.png',
    cargaOk: false
}

var pollo = {
    url: './img/pollo.png',
    cargaOk: false
}

fondo.imagen = new Image(); // Aquí creamos una 'Clase' es un objeto completo NUEVO que vive dentro 
                            // del objeto literal 'fondo'
fondo.imagen.src = fondo.url; // Aquí decimos que fondo.url va ser el url de la clase new Image que creamos
fondo.imagen.addEventListener('load', cargarFondo); // Evento que dispara la imagen cuando esta ya cargo.

vaca.imagen = new Image(); //Esto no es un variable, lo que hacemos que añadirle un atributo al objeto 'vaca'
vaca.imagen.src = vaca.url;                                                            //__________________|                                                 
vaca.imagen.addEventListener('load', cargarVacas);                                    //|
                                                                                      //|
cerdo.imagen = new Image(); // Es como tener imagen = new Image() Dentro del objeto cerdo
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollos);


//Función encargada determinar que la imagen ya cargo, y que cuando lo hace invoca a la función  dibujar()
// que hace el render de la imagén, este proceso hace que cada vez que se dibuje algo, se vuelva a dibujar 
// absolutamente todo, primero el fondo, luego la vaca, cerdo y pollo. Así no lidiamos con el hecho de que 
// en canvas, se dibuja una cosa sobre otra cosa, aunque después probablemente se pueda solucionar esto 
// con promesas y funciones asincronas.
function cargarFondo(evento) {
    fondo.cargaOk = true;
    dibujar();
    //console.log(evento);
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}

cantidadVacas = aleatorio (1, 3); // Determinan una cantidad de personajes aleatorios comprendidos entre min y max
cantidadCerdos = aleatorio (1, 6);
cantidadPollos = aleatorio (1, 10);


// Función que se encarga de hacer e render de cada uno de nuestros personajes y se invoca cada vez que uno de estos
// termina de cargar.
function dibujar() {
    if(fondo.cargaOk) { // Lo que esta linea intenta decir 'Si fondo.carkaOk = true; entonces dibuja fondo.imagen'
        papel.drawImage(fondo.imagen, 0, 0); // para dibujar una imagen se llama al canvas (en este caso 'papel')
        // Luego al metodo drawImage: papel.drawImage(objetoImagecreado, posicion en X, posición en Y)
    }    
    if(vaca.cargaOk) {
        //console.log(cantidadVacas);
        for(v = 0; v < cantidadVacas; v++) {// For encargado de dibujar una cantidad aleatoria de vaquitas
            var x = (aleatorio(6, 0)) * 80;// posición aleatoria en x de una vaquita
            var y = (aleatorio(0, 6)) * 80;// posicion aleatoria en Y de una vaquita 
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOk) {
        for(c = 0; c < cantidadCerdos; c++) {
            var x = (aleatorio(7.5, 0) * 60);
            var y = (aleatorio(0, 7.5) * 60);
            papel.drawImage(cerdo.imagen, x, y);
        }
        //console.log(cantidadCerdos);
    }    
    if(pollo.cargaOk) {
        for(var p = 0; p < cantidadPollos; p++ ) {
            var x = (aleatorio(12, 0) * 40);
            var y = (aleatorio(0, 12) * 40);
            papel.drawImage(pollo.imagen, x, y);
        }
        //console.log(cantidadPollos);
    }
}

//Esta función recibé como parámetros a min y maxi y su función es la ejecutar un algoritmo
//que retorna un valor al hazar comprendido entre min y maxi 
function aleatorio(min, maxi) {
    var resultado; 
    resultado = Math.floor(Math.random()* (maxi - min + 1)) + min;
    return resultado; 
}
//

// var lol = aleatorio(5, 20); Así es como funciona el return, requieres caputurarlo en alguna variable
// console.log(lol);           Para que puedas adquirir su valor 