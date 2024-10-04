const leitor = require('prompt-sync')();
let peso, altura, resultado; 

//function calcularquadrado(num) {
    const calcularimc = (peso, altura, ) => {
        let imc  = peso/altura ** 2; 
        return imc; 
    } 
    
    peso = parseFloat(leitor( 'Digite o peso:' )); 
    
    altura = parseFloat(leitor('Digite o altura: ')); 
    
    resultado = calcularimc(peso, altura);

    console.log( 'IMC' + resultado);  