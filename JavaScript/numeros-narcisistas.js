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
  console.log(`Numero entero:  ${num} `)

  // convertir el numero a cadena
  // Lo usare para comparar el resultado final
  numCadena = num.toString();

  /** 
   * Contar el numero de digitos del numero entero ingresado por el user
   * Lo usare para multiplicar cada digito por el total de digitos del 
   * numero entero 
  **/
  num_digitos = numCadena.length;

  // muestro por consola el numero de digitos
  console.log(`Numero de digitos: ${num_digitos}`)

  // Diccionario para obtener los digitos por separado
  digitos = {}
  let resultado = 0;
  total = 0;
  
  for (let i = 0; i < num_digitos; i++) {
    let digito = parseInt(num[i] ** num_digitos)
    console.log('digito: ' + digito)
    digitos[i] = digito;
  }

  /**  
   * Muestro los digitos por separado
   * En esta parte manejare la logica de multiplicar cada digito
   * por el total de los digitos del numero entero
  **/
  console.log("Los dígitos separados son:");
  for (let posicion in digitos) {
    console.log(posicion + ": " + digitos[posicion]);

    // Almaceno y sumo cada numero iterado dando como resultado el total de la suma de ellos
    resultado += digitos[posicion]
  }

  if (resultado == numCadena) {
    console.log('true ' + 'Entero: ' + num + ' ' + 'Resultado: ' + resultado)
  } else {
    console.log('false ' + 'Entero: ' + num + ' ' + 'Resultado: ' + resultado)
  }

}

numNarcisista();