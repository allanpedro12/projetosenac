let quantidade = parseInt(process.argv[2]);
let num1 = 0;
let total = 0;

while( num1 < quantidade ) {
    console.log( num1);
    num1 = num1 + 1; 
    total = total + num1; 
}  

console.log( 
        ' A soma dos' + quantidade + 'primeiros números é: ' + total
); 