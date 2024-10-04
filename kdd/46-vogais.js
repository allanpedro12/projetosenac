let frase = 'ola mundo';  
 let contador = 0; 
for(let i = 0; i < frase.length; i++) {
    if( 
        frase[i] === 'a' ||
        frase[i] === 'e' ||
        frase[i] === 'i' ||
        frase[i] === 'o' ||
        frase[i] === 'u' 
     ) {
        contador ++; 
    }
} 

console.log( ' esta frase tem' + contador + 'vogais');