// Bucle recorre el array de objeto person por clave valor
for (let key in person) {
  console.log(`${key}-Nombre: ${person[key].nombre} \n  Altura: ${person[key].altura} \n  Edad: ${person[key].edad}`);
}

// Filtrar informacion de persona que contengan datos similares METODO(filter)
// Estructura nombreArray/metodo filter()/ parametro/ arrowFunction/ parametro + clave/ valor
let info = person.filter(item => item.comidaFav == 'sushi');
console.log(info)

// Buscar un elemento que contenga algo especifco METODO(find) y muestra al primero que encuentre 
// Estructura nombreArray/metodo find()/ parametro/ arrowFunction/ parametro + clave/ valor
console.log(person.find(p => p.apellido == 'Roust'))

// devuelve true o false dependiendo si existe o no existe lo que estoy METODO(some)
// Estructura nombreArray/metodo some()/ parametro/ arrowFunction/ parametro + clave/ valor
console.log(person.some(p => p.edad === 20));

// No solo comprueba si hay alguno si no que tambien verifica si se cumple en todo METODO(every)
// Estructura nombreArray/metodo every(parametro/ arrowFunction/ parametro + clave + includes/(valor))
console.log(person.every(p => p.deportes.includes('futbol')));

// Forma un array con un dato en especifico que quiero que muestrede quiero que me devuelva unicamente los nombre de las personas METODO(map)
// Estructura nombreArray/metodo map(parametro/ arrowFunction/ parametro + clave)
console.log(person.map(p => p.nombre))

// Devuelve un array a partir de otro unicamente con la condicion que quiero filtrar METODO(filter)
// Metodo que devuelva las personas unicamente en los que contengan sushi/
// Estructura nombreArray/metodo filter(parametro/ arrowFunction/ parametro + clave + includes/(valor))
console.log(person.filter(p => p.comidaFav.includes('sushi')))