/**
 *  Numeros narcisistas
 * 
 *  Un numero es narcisista si es igual a la suma de sus
 *  propios digitos, cada uno elevado a la potencia del 
 *  numero de dijitos.
 * 
 * 
 *  Problema.
 *  Escribir una funcion que reciba un numero entero y 
 *  determine si es numero narcisista.
 * 
 * 
 *  EJ.
 *  Input: 153
 *  Output: True
 *  (153 = 1^3 + 5^3 + 3^3)
 *  
 **/

function numNarcisista(num) {
    // Pedir al usuario que ingrese un numero
    num = prompt('Ingrese un numero');

    // muestro en consola el numero ingresado por el usuario
    console.log(num)

    // convertir el numero a cadena
    numCadena = num.toString();

    // Contar el numero de digitos del numero entero ingresado por el usuario
    num_digitos = numCadena.length;

    // muestro por consola el numero de digitos
    console.log(num_digitos)

    // Diccionario para obtener los digitos por separado
    digitos = {}

    // Itero sobre cada caracter 
    for (let i = 0; i < num_digitos; i++) {
        let digito = num[i]
        digitos[i] = digito;
    }

    console.log(digitos)

    // Muestro los digitos por separado
    console.log("Los dígitos separados son:");
    for (let posicion in digitos) {
        console.log(posicion + ": " + digitos[posicion]);
    }

    // FALTAAAA XD

}

numNarcisista();