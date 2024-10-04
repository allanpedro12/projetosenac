let numero = parseInt(process.argv[2]); 
let acumulador = 1; 

for(let i = 1; i <= numero; i++) {
    acumulador =  acumulador *i;

} 
console.log( acumulador); 