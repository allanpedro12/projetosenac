let A,B,C;
A = parseInt( process.argv[2]);
B = parseInt( process.argv[3]); 
C  = parseInt( process.argv[4]);

if ( A == B && B == C && C == A ){
    console.log( ' Equilátero: lados  do mesmo tamanho'); 
} else if ( A !== B && B !== C && C !== A ){
    comsole.log( 'escaleno');
} else {
    console.log( 'isóscelos'); 
}


