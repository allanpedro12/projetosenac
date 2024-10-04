let num = parseInt( process.argv[2]);
let numnalinha = 1; 
let numquejaimprimiramnalinha = 0; 

for( let x = 1; x <= num; x++){
    if( numquejaimprimiramnalinha === numnalinha){
        console.log(); 
        numnalinha ++;
        numquejaimprimiramnalinha= 0;
    } 
        numquejaimprimiramnalinha++; 
    
    process.stdout.write( x + ' '); 
} 