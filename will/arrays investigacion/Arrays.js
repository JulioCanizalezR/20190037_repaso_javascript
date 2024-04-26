/* Tarea de investigacion de arrays

push(): Agregar elementos al final de un array.
let array = [1, 2, 3];
array.push(4);
console.log(array); 

pop(): Eliminar el último elemento de un array.

let array = [1, 2, 3, 4];
let removedElement = array.pop();
console.log(array); // Output: [1, 2, 3]
console.log(removedElement); // Output: 4

shift(): Eliminar el primer elemento de un array.

let array = [1, 2, 3, 4];
let removedElement = array.shift();
console.log(array); // Output: [2, 3, 4]
console.log(removedElement); // Output: 1


unshift(): Agregar elementos al inicio de un array.

let array = [2, 3, 4];
array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4]

concat(): Combinar dos o más arrays.

let array1 = [1, 2];
let array2 = [3, 4];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4]


*/




// Lo que hace este array es que toma toda los numeros del arreglo y los suma asi nos da de una manera reducida los elementos del array
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// lo que hace este array es filtrar los numeros de este objecto y le decimos que si su resultado es 0 los imprima en consola
let numbers2 = [1, 2, 3, 4, 5,6];
let evenNumbers = numbers2.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

