// Programación Orientada a Objetos.

// Array asociativo.                           Objeto Literal(JSON)            *Son y funcionan muy SIMILAR
var imagenes = [];                          //  Var imagenes = {   
imagenes['Cauchin'] = './img/vaca.png'     //   Cauchin: './img/vaca.png',                        
imagenes['Pokacho'] = './img/pollo.png'    //   Pokacho: './img/pollo.png',
imagenes['Tocinauro'] = './img/cerdo.png'  //   Tocinauro: './img/cerdo.png'
                                            //  }    

// Una clase es una DEFINICION de un obejto, y se hace de la siguiente manera. 
    class Pakiman {
    // En este ejemplo 'this' se refiere a la instancia de la clase, en otras casos puede que no.
     //This es un indicador de la instancia en donde estoy, ejemplo:
      // La variale var 'cauchin' es un nuevo objeto de tipo pakiman, entonces cuando tenemos this.vida = 100
      // this.vida es una referencia a cauchin, a la instancia de la clase, y le agraga una vida al pakiman
      // de valor 100
        constructor(nombrecito, vidita, ataquecito) { //Tu le puedes modificar los valores, que son son sus parametros.
            this.nombre = nombrecito; // Estás son las variables, de nuestros pakimanes
            this.vida = vidita;      // Y se asignan dentro del constructor  
            this.ataque = ataquecito; 
            
            // Se pueden crear clases dentro de una clase en este caso es de tipo new Image para la representación
            // visual de nuestro pakimane, si tener que utilizar un canvas necesariamente.
                this.imagen = new Image(); 
                this.imagen.src = imagenes[this.nombre]; // this.imagen.src = imagenes["Pokacho"]
                // Por ejemplo si se tiene "var cauchin = new Pakiman('Cauchin')", esto es igual a la variable 
                // 'nombrecito', lo cual es igual 'this.nombre', this.nombre equivale a 'Pokacho'
                // e imagenes['Pokacho'] es igual a './img/pollo.png', por ende se imprime la imagen
        }
        hablar() { //dentro de las clases no hay que escribir 'function' para declarar una  
            alert('Hola mi nombre es ' + this.nombre); // función, ya que se entiende de manera implicita que 
        }                                         // todo bloque de codigo dentro de una clase es una funcion.     

        mostrar() {
            document.body.appendChild(this.imagen); // Para agregar una imagen requerimos invocar document.body.appendChild
            // document --> Objeto donde se imprimira la imagen
            // body --> selecciona la parte del html donde creará la imagen, en este caso es el body, pues ahí esta el script
            //appenChild --> Damos la indicacion de que se le agragará un 'hijo' al body, recordemos que html es un árbol. 
            document.write('</br><strong>' + this.nombre + '</strong></br>');
            document.write(this.vida + '</br>');
            document.write(this.ataque + '<hr />');
        }                                                   
    }


// {

// Sale, aquí tenemos el bloque de codigo original, aquí lo que hicimos fue crear una variable por cada instancia
// de la clase pakiman, luego creamos una coleccion de pakimanes, donde con el metodo push de mutación, vamos
// agragando cada uno de nuestros pakimanes a dicho objeto, luego para imprimirlos en la pantalla, 
// los llamamos con la sintaxis para llamar a un objeto de un array coleccion[posicion].funcion();

    // var cauchin = new Pakiman('Cauchin', 100, 30);  --> Así se crea una nueva instancia de la clase
    // var pokacho = new Pakiman('Pokacho', 80, 50);   |-- en este caso el objeto Pokacho con sus varables this
    // var tocinauro = new Pakiman('Tocinauro', 120, 25);
    // console.log(cauchin, pokacho, tocinauro);
    // //tocinauro.hablar(); //Así se dise dispara una función (en este caso hablar()) en uno de nuestros Pakimanes 

    // var coleccionPakimanes = [];
        // Con push, agregamos a cada uno de nuestros pakimane (que son objetos) a nuestro array "coleccionPakimanes"
        // que cuando lo creamos de forma vacia []
            // coleccionPakimanes.push(cauchin); 
            // coleccionPakimanes.push(pokacho);
            // coleccionPakimanes.push(tocinauro);
            // console.log(coleccionPakimanes);

        // Y de esta forma le pasamos la función .mostrar() a cada una de las posiciones de nuestros pakimanes
        // para que se logren imprimir en la pantalla co sus información.
            // coleccionPakimanes[0].mostrar();
            // coleccionPakimanes[1].mostrar();
            // coleccionPakimanes[2].mostrar();

//

// }

// Ahora... si bien el código de arriba esta bien, se hace tedioso tener que invocar un por uno cada objeto del array
// más si imaginemos que se tienen 150 pokimanes o incluso más. Es por eso que existen ciclos que imprimen 
// cada uno de los objetos de un array, como es el caso de for(var varible_iteradora of/in coleccion) 
// Y para ello también podemos crear las instancias de nuestros pakimanes (new Pakiman) DENTRO del array
// de coleccion de pakianes ahorrando una cantidad muy grande de lineas de código 
var coleccionPakimanes = [];
coleccionPakimanes.push( new Pakiman('Cauchin', 100, 30));
coleccionPakimanes.push( new Pakiman('Pokacho', 80, 50));
coleccionPakimanes.push( new Pakiman('Tocinauro', 120, 25));

console.log(coleccionPakimanes); // retorna nuestro arreglo de pakimanes

// existen 2 tipos de ciclos especiales que retornar los objetos o el indice de un array. Este ciclo que solo 
// va a operar por la cantidad de objetos que estan dentro del array de nuestras coleccion
// Aquí lo que de decimos es que, por cada pakin de la coleccionPakimanes, retorname cada uno de mis objetos

for(var pakin of coleccionPakimanes) { // en el caso de OF muestra directamente la instancia en vez el indice
    console.log(pakin); // por lo que si hacemos un console.log(variable_iteradora) retorna los objetos del array
    pakin.mostrar(); 
}

for(var pakin in coleccionPakimanes) {

  // IN me trae el INDICE de la colección si hacemos el siguiente console.log:
       console.log(pakin);
  // Ahora, si hacemos el siguiente console.log, retornará cada uno de los objetos de la coleccion.
       console.log(coleccionPakimanes[pakin]); 
  // Por lo que si cambiamos el console.log por nuestra función hablar(), entonces se imprimiran todos los pakimanes
  // En la pantalla 
//     coleccionPakimanes[pakin].mostrar(); 

}
