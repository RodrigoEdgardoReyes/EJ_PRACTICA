// let persona = {
//     nombre: 'Gorge',
//     edad: '18',
//     pais: 'Canada'
// };

// for (let key in persona) {
//     console.log(key + ': ' + persona[key]);
// }


// // EJEMPLO  1

// let numeros  = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < numeros.length; i++)
// {
//     console.log(numeros)
// }

// // EJEMPLO 2

// let frutas = ['manzana', 'banana', 'pera', 'uva'];


// frutas.forEach(function(fruta) {
//   console.log(fruta);
// });

// // EJEMPLO 3
// // Filtrar elementos de un arrglo
// // Filatrar numeros pares
// let numeross = [1, 2, 3, 4, 5];

// let numerosPares = numeross.filter(function(numero) {
//   return numero % 2 === 0;
// });
// console.log(numerosPares);

// // EJEMPLO 4
// // Map para transformar elementos

// let num = [1, 2, 3, 4, 5];
// let cuadrados = num.map(function(numero) {
//     // multiplica un numero el mismo valor
//   return numero * numero;
// });
// console.log(cuadrados);

// // EJEMPLO 5
// //  Encontrar un elemento en un arreglo

// let frutass = ['manzana', 'banana', 'pera', 'uva'];
// let frutaBuscada = 'manzana';
// let indice = frutass.indexOf(frutaBuscada);
// if (indice !== -1) {
//   console.log(`La fruta "${frutaBuscada}" se encuentra en el índice ${indice}`);
// } else {
//   console.log(`La fruta "${frutaBuscada}" no se encuentra en el arreglo`);
// }


// // Definir el objeto JSON con información de personas
// let personas = [
//     { nombre: 'Gorge', edad: 18, pais: 'Canadá' },
//     { nombre: 'Alice', edad: 25, pais: 'Estados Unidos' },
//     { nombre: 'Juan', edad: 18, pais: 'México' },
//     { nombre: 'Maria', edad: 30, pais: 'España' }
// ];

// // Función para imprimir las personas con una edad específica
// function imprimirPorEdad(edad) {
//     console.log(`Personas con ${edad} años:`);
//     for (let persona of personas) {
//         if (persona.edad === edad) {
//             console.log(persona.nombre);
//         }
//     }
// }

// // Función para imprimir la información de una persona por país
// function imprimirPorPais(pais) {
//     console.log(`Información de personas de ${pais}:`);
//     for (let persona of personas) {
//         if (persona.pais === pais) {
//             console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
//         }
//     }
// }

// // Uso de las funciones
// imprimirPorEdad(18); // Imprimir personas de 18 años
// imprimirPorPais('España'); // Imprimir personas de España


// identificacion de una persona por nombre

// let persona = {
//     nombre: 'rodri',
//     edad: '18',
//     pais: 'El Salvador'
// }
// let pnombre = prompt('ingresa tu nombre')


//     for (let key in persona) {
//         // key(Nombre) representa el nombre de la propiedad
//         // p[key](Rodrigo) representa el valor de la propiedad
//         // console.log(key + ': ' + persona[key]);
//         // persona[key] => Accede al valor de la propiedad que es nombre
//         if(pnombre === persona[key])
//         console.log('Bienvenido señor un gusto verlo de nuevo')
//         else
//         console.log('Identificacion incorrecta')
//     }


/*
// Sumar un array

suma = 0;
function sumaNumPar() {
    for (let i = 2; i <= 10; i += 2) {
        suma += i;
        console.log(i)
    }
}
sumaNumPar()
console.log('Si se pudo a la VRG el resultado es: ' + suma)*/

/*
// Funcion saludar
function saludar(nombre) {
    console.log(`!Holaa ${nombre}¡`);
}

saludar('rodri')
saludar('Canchito feliz')*/


/*
// fizzbuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log('fizzbuzz')
    else if (i % 3 == 0)
        console.log('fizz')
    else if (i % 5 == 0)
        console.log('buzz')
    else {
        console.log(i)
    }
}
*/


/*
// Determinar si una palabra es anagrama o no

function esAnagrama(palabra1, palabra2) {
    diccionario1 = {};
    diccionario2 = {};
    // Llena los diccionarios con la frecuencia de caracteres en cada palabra
    for (let letra in palabra1)
        diccionario1[letra] = (diccionario1[letra] || 0) + 1;

    for (let letra in palabra2)
        diccionario2[letra] = (diccionario2[letra] || 0) + 1;

    // Comparar los diccionarios para determinar si son anagramas
    for (let letra in diccionario1) {
        if (!(letra in diccionario2) || diccionario1[letra] !== diccionario2[letra])
            // Si hay diferencias en las frecuencias, no son anagramas

            return false
    }
    // Si no se encontraron diferencias, son anagramas
    return true;
}
// Ejemplo de uso
let palabra1 = "foso";
let palabra2 = "foca";

if (esAnagrama(palabra1, palabra2)) {
    console.log(`${palabra1} y ${palabra2} son anagramas.`);
} else {
    console.log(`${palabra1} y ${palabra2} no son anagramas.`);
}


// palabra1 = prompt('Digita la palabra 1: ')
// palabra2 = prompt('Digita la palabra 2: ')
// if (palabra1 == palabra2)
//     console.log('es anagrama')
// else
//     console.log('no es')
*/

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 
let num1 = 1;
let num2 = 1;

console.log(num1)
console.log(num2)
for (let i = 1; i <= 50; i++) {
    let suma = num1 + num2;
    console.log(suma)
    num1 = num2
    num2 = suma
}
*/



/* Area de un poligono
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 * 
 Para sacara el area de un poligono regular multiplicar la Apotema por la longitud de uno de sus lados por el numeros de lados
    del poligono y luego dividir entre dos 
	
    A= Ap.L.NL/2


function calculoArea(poligono) {
    let longitud = prompt('introduce la longitud del poligono');
    let apotema = prompt('introduce la apotema del poligono');
    let nLados = prompt('introduce el numero de lados del poligono');
    poligono = apotema * longitud * nLados / 2;
    // console.log('El area del poligono es: ' + poligono)
    return poligono;
}

console.log('El area del poligono es: ' + calculoArea())
 */















/*
// Recorrer un objeto como un array
const libro = {
    titulo: 'Aprendiendo JavaScript',
    autor: 'Rodrigo Reyes',
    numPaginas: 100,
    redes: {
        facebook: 'Deymon',
        instagram: 'Deymon'
    },
    editorial: 'rodrigoreyes.es',
    precio: '25.99'
}
//Forma de acceder a diferentes propiedades
libro.titulo
libro['autor']['redes'], ['facebook']
console.log(libro)
// Primer forma
// const props = Object.getOwnPropertyNames(libro);
// props.forEach(name => {
//     let valor = Object.getOwnPropertyDescriptor(libro, name).value
//     console.log(`La prop ${name} contiene: ${valor}`)
// })

// forma dos de recorrer lo que contiene libro
for (let prop in libro)
    console.log(`la propiedad ${prop} contiene: ${libro[prop]}`)

*/




















/*
let miArray = [12, 9, 6, 3];
//metodo devuelve el array ordenado
miArray.sort()
//metodo pop devuelve el ultimo elemento del array
miArray.pop()
//metodo push sirve para agregar nuevos elementod dentro del array
miArray.push(2)
// metodo reverse coloca de forma inversa los elementos ej: [1,2] =  [2,1]
miArray.reverse()
*/











/*
//METODO MAP
//Permite aplicacr una misma funcion a todos los elementos de un array
// y transformarlos y me devolvera un array completamente nuevo con todos
// los elementos transformados 
//Calcular la raiz de cada elemento que se encuentra dentro del array
let miArray = [1, 2, 3, 4, 5, 6];
//Funcion para calcular la raiz
// FORMA 1
let raices = miArray.map(function (item) {
    return Math.sqrt(item)
})
console.log(raices)
// FORMA 2
// Arrow function
let raiz = miArray.map((item) => Math.sqrt(item))
console.log(raiz)
// FORMA 3
let raice = miArray.map(Math.sqrt)
console.log(raice)

*/








//Metod filter
//Multiplos de 3
//Para saber si un numero es multiplo de 3 su division
//entre 3 tiene que dar 0
let miArrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let resultado = miArrayy.filter(item => item % 3 === 0);
console.log(resultado)
// cortar array
// metodo slice
miArrayy.slice(2)
console.log(miArrayy)
//Clase string Array
console.log('Javascript'[2]) //accedo a la posicion dos que seria v
'Javascript'.length // devuelve la cantidad de caracteres que serian 10
'Javascript'.charCodeAt(2) //
// busca si se encuentra ese caracter
// si retorna -1 es que no se encuentra
'Javascript'.indexOf('script')
'Javascript'.substring(2, 4) // devuelve de la posicion 2 a 4 sin incluirla = 'va'

// Transformar un string a un array
const fehca = new Date();
// Muestra solo la hora en la posicion numero 4
console.log(fehca.toString().split(' ')[4])

// Manejo de arrays y arreglos
//Array de objetos 
const post = [{
    id: 1,
    title: 'Mi primer post',
    image: 'https://img.com/1',
    tags: ['javascript', 'webdevelopment']
}, {
    id: 2,
    title: 'Mi experiencia con React',
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment', 'react']
}, {
    id: 3,
    title: 'Porque deje angular',
    image: 'https://img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular']
}];

/*Metodo find
Busca un elemento que contenga lo que estoy buscando

funcion => recorra todos los post cada uno de ellos y que devuelva aquel
cuyo title sea (nombre del titulo)*/
console.log(post.find(post => post.title == 'Porque deje angular'))
// buscar por id
console.log(post.find(post => post.id == 2))

/*Metodo Some
devuelve true o false dependiendo si existe o no existe lo que estoy
buscando*/
console.log(post.some(post => post.id === 5));
/* el metodo includes sirve para verificar si existe
dentro de un array cierta palabra*/
console.log(post.some(post => post.tags.includes('react')));
/* el metodo every no solo comprueba si hay alguno si no que tambien.
verifica si se cumple en todo*/
console.log(post.every(post => post.tags.includes('react')));
/*Metodo map
Formar un array con unicamente los titulos de los objeto que tiene el array
para cada post quiero que me devuelva unicamente los titulos*/
console.log(post.map(post => post.title))
/*Metodo filter
devuelve un array a partir de otro unicamente con la condicion que quiero filtrar

Metodo que devuelva los post unicamente en los que se hable de angular*/
console.log(post.filter(post => post.tags.includes('angular')))
// devuelve los post que tengan image o sea distinta a undefined
console.log(post.filter(post => post.image !== undefined))
/*Metodo reduce Forma 1
incluir todas las etiquetas que estoy utlizando
funcion flecha => recibe dos argumentos el 1ro es el acumulador 
el segundo es el elemento que estoy iterando => post*/
console.log(post.reduce((allTags, post) => {
    // retorna un nuevo array con una copia con sprace operator de todas las 
    //etiquetas y seguido concatena el post acual y las tags
    return [...allTags, ...post.tags];
}, [])); // por ultimo lo inicializo con un array bacio
// Forma 2 sin repeticiones usando Set
console.log(post.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]));
}, []));
// Forma 3 sin repeticiones sin usar Set, usando filter
console.log(post.reduce((allTags, post) => {
    return [...allTags, ...post.tags];
}, []).filter((post, index, self) => index === self.indexOf(post)))

// Objeto this hace referencia al contexto en el que se esta ejecutando la funcion


// Asincronia (Promesas, Async/Await)
// Array
const datos = []
// const datos = [{
//     id: 1,
//     title: 'Iron Man',
//     year: 2008
// }, {
//     id: 2,
//     title: 'Spiderman: Homecoming',
//     year: 2017
// }, {
//     id: 3,
//     title: 'Avengers: Endgame',
//     year: 2019
// }];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length == 0)
            //Mensaje de error
            reject(new Error('No existen datos'));
        setTimeout(() => {
            resolve(datos);
        }, 1500)
    });
}
//getDatos().then((datos) => console.log(datos))
async function fechingData() {
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched)
    } catch (error) {
        console.log(error.message);
    }

}
fechingData();





//Mostrar datos en el DOM
let array = ['futbol', 'basquetball', 'voleibol', 'beisbol']
let array2 = ['futbol', 'basquetball', 'voleibol', 'beisbol']

function mostrarDOM(elemento, arr) {
    document.getElementById(elemento).innerHTML = '';
    for (let i = 0; i < arr.length; i++)
        document.getElementById(elemento).innerHTML += `<div> ${arr[i]}<div>`;
}
const array3 = array.concat(array2);
mostrarDOM('array1', array)
mostrarDOM('array2', array3)


// function mostrarDOM(elemento, arr) {
//     document.getElementById(elemento).innerHTML = '';
//     for (let i = 0; i < arr.length; i++)
//         document.getElementById(elemento).innerHTML +=
//             `<div> ${arr[i].name} $ ${arr[i].price} (${arr[i].alcohol})<div>`;
// }

const beers = [{
    name: 'Heineken',
    price: 4.50,
    alcohol: 5.0
}, {
    name: 'Stella Artois',
    price: 5.50,
    alcohol: 5.0
}, {
    name: 'Corona',
    price: 2.50,
    alcohol: 4.5
}, {
    name: 'Budweiser',
    price: 6,
    alcohol: 4.5
}];

function mostrarDom(elemento, arr) {
    document.getElementById(elemento).innerHTML = '';
    for (let i = 0; i < arr.length; i++)
        document.getElementById(elemento).innerHTML +=
            `<div> ${arr[i].name} $ ${arr[i].price} (${arr[i].alcohol})<div>`;
}

// mostrarDom('array3', beers);

const persona = [{
    nombre: 'Rodrigo',
    apellido: 'Reyes',
    redes: ['intagram', 'faceboock', 'whatsApp'],
    deportes: [' futbol', ' basquetball'],
    carrera: 'Desarrollo de software'
}];

function personaDom(id, arr) {
    document.getElementById(id).innerHTML = '';
    for (let i = 0; i < arr.length; i++)
        document.getElementById(id).innerHTML += `<div> Nombre: ${arr[i].nombre} <br> Apellido: ${arr[i].apellido} <br> Redes: ${arr[i].redes} <br> Deportes: ${arr[i].deportes} <br> Carrera: ${arr[i].carrera} <br> <div>`;

}

personaDom('array3', persona);