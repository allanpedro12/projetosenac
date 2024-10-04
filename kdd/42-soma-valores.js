let lista = [ 1, 2, 3, 4, 5, 6, 7, ]; 
let   maior = 0;

for( let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
        maior = lista[i];
    }
} 
console.log(maior);