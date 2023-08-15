//casos muy especificos - breack, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; lista.length; i++) {
    
    if (lista[i] === 3) {
        continue;
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break;
    }
}

//no es recomendable como buena practica utilizar el continue y el break;

//cual es el ámbito de un bucle