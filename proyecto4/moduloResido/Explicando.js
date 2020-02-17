// METODO 2

const iteraciones = 100; //cantidad de iteraciones

for(var n = 1; n <= iteraciones; n++) {
    
    if(n % 3 == 0) {
        document.write('Fizz');
    }

    if(n % 5 == 0) {
        document.write('Bozz');
    }

    if(n % 3 != 0 && n % 5 != 0) { // Vale, la ciencia de este "if" es simple, básicamente se tienen 2 condiciones 
        document.write(n);        // ligadas por && entonces para que se ejecute el document.write(n); se deben cumplir
    }                            // ambas condiciones, por lo que, si el modulo de dividir n entr 3 y 5 NO es 0,
    document.write('<br />');   // Entonces se imprime el número iterador 
}

//




// METODO 3

function esDivisible(num, divisor) { // La magia de este metodo, es que básicamente el tema de los modulos
    if(num % divisor == 0) {       // Lo metemos en una función, que recibe dos parametros, el numero iterador
        return true;            // y un número divisior. Entonces decimos que si el modulo de dividir el
    }                       // el numero iterador entre el divisor es igual a = 0. La función retornará "verdadero"
    else {                // sino, retornará "falso"
        return false; 
    }
}

const iteraciones = 100;

for(var n = 1; n <= iteraciones; n++) {
    
    
    if(esDivisible(n, 3)) {  // Para enteder bien que pasa aquí, solo hay que recordar que lo que se encuentre dentro
        document.write('Fizz'); // del if, es una condición que se tiene que cumplir, es por eso que cuando
    }                       // ejecutamos la función como una condición, esta retorna verdadero, y es por eso que 
                            // Se imprime 'Fizz'

    if(esDivisible(n, 5)) {
        document.write('Bozz');
    }

    if(!esDivisible(n, 3) && !esDivisible(n, 5)) { // Aquí estamos diciendo que si el resido de dividir n entre 
        document.write(n);     // 3 o 5, NO es igual a cero en ambos casos, entonces imprima el número iterador.
    }
    document.write('<br />');
}

//