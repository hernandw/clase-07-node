const _ = require('lodash');



//Suma de una rray con funciones
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

function sumarNumeros(numeros) {
    let suma = 0
    for(let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma
}

/* console.log('suma con funcion', sumarNumeros(numeros)) */

// suma de array con lodash

const resultado = _.sum(numeros)
/* console.log('suma con lodash', resultado) */


/* EJERCICIO 2 */

//verificar que elemento del array 2 no estan en el array 1

const array = [10, 20, 30, 40]
const array2 = [10, 20, 50, 60, 70]

function encontrarDiferencia (array, array2) {
    const diferencia = array2.filter(valor => !array.includes(valor))
    return diferencia
}

const resultadoDiferencia = encontrarDiferencia(array, array2)
/* console.log('diferencia con funciones', resultadoDiferencia) */

//verificar que elemento del array 2 no estan en el array 1 con lodash

const resultadoDiferencia2 = _.difference(array2, array)
/* console.log('diferencia con lodash', resultadoDiferencia2) */

/* EJERCICIO 3 */

//separar de un array los numero pares e impares con lodash

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const resultadoParImpar = _.partition(num, n => n % 2)
console.log('pares e impares con lodash', resultadoParImpar)

//separar de un array los numero pares e impares sin lodash

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];
for (let index = 0; index < num2.length; index++) {
  if (num2[index] % 2) {
    impares.push(num2[index]);
  } else {
    pares.push(num2[index]);
  }
}
let arregloFinal = [impares, pares];
console.log('pares e impares sin lodash', arregloFinal);
