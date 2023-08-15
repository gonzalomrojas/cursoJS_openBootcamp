//Metodos de cadenas de texto (parte 3)
//https://regexr.com pagina para practicar expresiones regulares

let texto_largo = "Tito no es un mono cualquiera. Atito no le gusta trepar los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

console.log(texto_largo.match(/no/g))
//Se obtienen la cantidad de veces que se repite esta palabra

console.log(texto_largo.includes("prefiere"))
//Si se encuentra la palabra da true
console.log(texto_largo.includes("hola"))
//si no existe la palabra dentro del texto da false


console.log(texto_largo.startsWith("Tito"))
//Si el texto comienza con una palabra o letra

console.log(texto_largo.endsWith("."))
//Si el texto termina con una palabra o letra


