// Principales operaciones aritmeticas 
let a = 3.3;
let b = 4.2;

// Suma
console.log(a + b)

// Resta
console.log(a - b)

// Multiplicacion
console.log(a * b)

// Division
console.log(a / b)


// Representacion de los numeros en cadenas de texto
console.log(typeof a)
let a_s = a.toString();
console.log(a_s)
console.log(typeof a_s)

// Redondeo de numeros decimales
let c = 3.3; 
let d = c * 3;

console.log(d);
console.log(typeof d);

// .toFixed()
console.log(d.toFixed(4))
// cant de decimales()

console.log(typeof d.toFixed(4))


let e = 1839.1234565788;
console.log(e.toFixed(2))

// .toPrecision(x)
console.log(e.toPrecision(4));
//(cantidad de numeros que se tendran en cuenta)
console.log(e.toPrecision(2));

console.log(typeof e.toPrecision(2));
