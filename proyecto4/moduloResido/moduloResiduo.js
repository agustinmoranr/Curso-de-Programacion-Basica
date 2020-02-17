// METODO 1

const iteraciones = 100; // cantidad de interaciones del ciclo for 
var divisible; //determina si resultado es divisible (se encarga dibujar
// los numeros que no son fizz, bozz, fizzbozz)

for(var n = 1; n <= iteraciones; n++) { 
    divisible = false //cada iteración comienza siendo "No divisible", osea, en false.
    if(n % 3 == 0) { //Si el residuo de dividir n / 3 == 0, entonce...
        document.write('Fizz'); //Se imprime la palabra "Fizz"
        divisible = true; // Por o que podemos decir que es divisible, osea, true :D
    }

    if(n % 5 == 0) { //Exactamente lo mismo que el if de arriba, pero teniendo de divisor a 5
        document.write('Bozz');
        divisible = true;
    }

    if(!divisible) { //Ojo, aquí estamos diciendo, que si NO es divisible, entonces imprima el número
        // de iteración correspondiente, por lo que, como n % 3 y n % 5 si son divisibles, pues, en los if
        // de arriba fueron declarados como "true", entonces.. no se escribirá el número iteración en las 
        // palabras fizz, bozz, fizzbozz. 
        document.write(n);
    }
    document.write('<br />'); //Agrega un salto de linea en cada iteración.
}

//



// const iteraciones = 100;

// for(var n = 1; n <= iteraciones; n++) {
    
//     if(n % 3 == 0) {
//         document.write('Fizz');
//     }

//     if(n % 5 == 0) {
//         document.write('Bozz');
//     }

//     if(n % 3 != 0 && n % 5 != 0) {
//         document.write(n);
//     }
//     document.write('<br />');
// }




// const iteraciones = 100;

// for(var n = 1; n <= iteraciones; n++) {
    
//     if(esDivisible(n, 3)) {
//         document.write('Fizz');
//     }

//     if(esDivisible(n, 5)) {
//         document.write('Bozz');
//     }

//     if(!esDivisible(n, 3) && !esDivisible(n, 5)) {
//         document.write(n);
//     }
//     document.write('<br />');
// }

// function esDivisible(num, divisor) {
//     if(num % divisor == 0) {
//         return true;
//     } 
//     else {
//         return false; 
//     }
// }