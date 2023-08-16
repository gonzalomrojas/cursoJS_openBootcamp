// Metodos de numbers y limites
// Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b); //SUMA LOS VALORES DE A Y B

console.log(b.valueOf());

let str = new String("Hola como wa");
console.log(str)
console.log(str.valueOf())

// NaN - Infinity (not a number)
let n = Number("adios");
console.log(n)
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;
console.log(numerador / divisor);
console.log(numerador / divisor_2);

// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = "5.89";
let num2  = 17.2;
console.log(typeof numero)
console.log(numero + num2)//ERROR DE CONCEPTO

console.log(Number(numero) + num2)//CASTEA UN STRING EN UN NUMERO

console.log(parseInt(numero))//Convierte en N°Entero

console.log(parseFloat(numero))//Convierte en N°Decimal

let num3 = 4;
console.log(parseInt(num3)) 
console.log(parseFloat(num3))

// Numeros hexadecimales (Base 16)
let numHex = "0x3a5b7" ;
console.log(parseInt(numHex,16));

// Obtener los valores maximo y minimo en JS
let minPrecision = Number.EPSILON
let minValor = Number.MIN_VALUE
let maxValor = Number.MAX_VALUE

console.log(minPrecision); //ESTE ES EL MINIMO VALOR DE JS
console.log(minValor);
console.log(maxValor)


