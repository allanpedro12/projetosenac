let operaçao = process.argv[2];
let tabuada = parseInt(process.argv)[3]; 
for ( let i = 0; i <= 10; i++) {
    if( operaçao === '+') {
        console.log( tabuada +  '+' +i+ '=' + ( i + tabuada));
    } else if( operaçao === '*'){
        console.log( tabuada + 'x' +i+ '=' + ( i * tabuada));
    }
} 

