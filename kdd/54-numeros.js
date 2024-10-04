const leitor = require('prompt-sync')(); 

let valores = []; 
let numero; 
let acumulador = 0

do{
    let valor = leitor('Digite um número: ');
    numero = parseInt(valor); 
    if( numero >= 0) {
        valores.push(numero); 
    }
} while ( numero !== -1); 

console.log(valores);  

for(let i = 0; i < valores.length; i++) {
    acumulador += valores[i];
}
media = acumulador / valores.length;

console.log( 'media:' + media); 
