//Metodos de cadenas de texto (parte 2)

let input = "BoCa"
let db = "boca"

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleLowerCase())//casos muy especificos
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

//Formas de concatenar dos cadenas de caracters

let str1 = "Hola mi nombre es primera."
let str2 = "Y yo soy segunda."

console.log(str1.concat(" ",str2 )) //ES MEJOR PRACTICA para strings
console.log(str1 + " " + str2)
console.log(`${str1} ${str2}`)

//Eliminar espacios al inicio y al final
let str3 = "   Tengo espacios por delante y al final.  "
console.log(str3.length)
//trim()
console.log(str3.trim().length)
console.log(str3.trimStart().length)
console.log(str3.trimEnd().length)

//Obtener el caracter que hay en cierta posicion
let str4 = "soy el nro 4"
console.log(str4.charAt(5))
console.log(str4[5])

//Obtener la posicion de una palabra dentro de una cadena de caracteres 
let = str5 = "sot el numero 5 y soy goood"
console.log(str5.indexOf("y"))
console.log(str5.charAt(16))
console.log(str5.lastIndexOf("soy"))
