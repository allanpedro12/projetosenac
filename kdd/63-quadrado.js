const leitor = require('prompt-sync')();
let numero, quadrado;

//function calcularquadrado(num) {
const calcularquadrado = (num) => {
    let q = num ** 2;
    return q; 
} 

numero = parseInt(leitor( 'Digite o numero:' )); 

quadrado = calcularquadrado(numero ); 

console.log(quadrado);  