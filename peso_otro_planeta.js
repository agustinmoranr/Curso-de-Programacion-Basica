const planeta = parseInt(prompt('escoge un planeta.\n1 Si quieres marte escribe 1. 2 para Jupiter'));
const usuario = prompt('Cuál es tu peso ');
const peso = parseInt(usuario);
const gravedadMarte = 3.7;
const gravedadTierra = 9.81;
const gravedadJupiter = 24.8;
var peso_final;
var planetaSeleccionado;

    if (planeta == 1) {
        peso_final = parseInt(peso * gravedadMarte / gravedadTierra);
        planetaSeleccionado = 'Marte';
    } else if (planeta == 2) {
        peso_final = parseInt(peso * gravedadJupiter / gravedadTierra);
        planetaSeleccionado = 'Jupiter';
    } else {
        peso_final = 100000;
        planetaSeleccionado = 'krypton';
    }
    
    peso_final = parseInt(peso_final);
    document.write('Tu peso en ' + planetaSeleccionado + ' es ' + peso_final + ' kg');
    console.log(peso_final);
    