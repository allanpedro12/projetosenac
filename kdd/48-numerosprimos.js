let num = parseInt(process.argv[2]); 
let ehprimo = true; 


for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        ehprimo = false; 
    }
} 
if(ehprimo) {
console.log('o numero ' + num + ' é primo');
} else {
    console.log( ' o numero ' + num + 'NÃO é primo');
} 