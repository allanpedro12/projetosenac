let quantidade = parseInt(process.argv[2]); 
let numero = 5;
let contadora = 2; 
let total 

while( contadora <  quantidade) {
    numero = numero + 2;
    total = total + numero; 
contadora = contadora + 1;
} 
console.log( 
    'a soma dos ' + quantidade + ' primeiros números é: ' + total
); 