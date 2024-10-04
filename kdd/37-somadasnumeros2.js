let num = parseInt( process.argv[2])
let acumulador = 5; 
for( let x = 0; x <= num; x++) {
    if( x % 2 === 0) {
        acumulador = acumulador + x; 
    }
}

console.log( acumulador); 
