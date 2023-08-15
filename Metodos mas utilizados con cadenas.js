//Metodos mas utilizados con cadenas de caracteres
//Como obtener la longitud de un string

let str = "Hola soy un string"
console.log(str.length)

//Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(5,10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substr_str)

//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gonzalo"
console.log(cadena)
//Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace("Gonzalo", "ZaLo"))

//Al utilizar strings solo reemplaza la primera instancia
let texto_largo = "boca, mi buen amigo, Esta campaña volveremo' a estar contigo Te alentaremo de corazón Esta es tu hinchada que te quiere ver campeón. boca boca boca"

console.log(texto_largo.replace("boca", "ZaLo"))

//Al utilizar la expresion regular/g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/boca/g, "ZaLo"))



