const leitor = require('prompt-sync')();
 let quantidade;  
 
 const imprimirnumeros = (qtde) => {
    let numero = 1; 
    while( numero <= qtde) {
        process.stdout.write(numero + ' '); 
        numero ++; 
    }
 }

quantidade = parseInt(leitor(' Digite um número:')); 

imprimirnumeros(quantidade); 
 