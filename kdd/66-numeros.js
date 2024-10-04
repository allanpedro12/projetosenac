const imprimirnumeros = (qtde) => {
    let numero = 1; 
    while( numero <= qtde) {
        process.stdout.write(numero + ' '); 
        numero ++; 
    }
 } 

 module.exports = { imprimirnumeros }; 