// como trabajar con listas (Arrays , arreglos , vectores...)
let array = [1, 2, 3, 4, 5, 6];
let array1 = ["hola", "como", "Donde", "cuando", "porqué"];

console.log(array) 

// Acceder a los valores de un array a traves de su posicion
//array[indice] => 0, 1, 2, 3, 4, ...
console.log(array[0]);
console.log(array1[0]);

// Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array
// Valores al final -> Push
array.push("Final", 45, 100, false);
console.log(array);

//Valores al principio => Unshift
array.unshift("inicio", 59, true);
console.log(array)

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan al valor del array
const array2 = [1, 3, "hola", false];

// Valores al final -> Pop
array2.pop();
console.log(array2);
// Valores al principio -> Shift
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];
array3.splice(2,1);
console.log(array3);

// Nos va a eliminar tantos valores a partir del indice que partamos
//(indice, numValoresAeliminar)

// Añadir valores .splice(indice, 0, valores)

array3.splice(2, 0, "hola", 3)
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);

