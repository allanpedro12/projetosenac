let  clima , temperatura; 
clima = process.argv [2];
temperatura = parseInt(process.argv[3] )

if( temperatura  < 0 &&  clima === 'nevando')  {
    console.log(  'evite sair de casa ');
} else if (  temperatura >= 10 && temperatura  <= 20 && clima === 'chove') {
    console.log( ' leve um guarda-chuva' );
}  else if( temperatura  > 20 &&  clima === 'nublado' ) {
    console.log( ' se hidrate pois está calor' ); 
} else if ( temperatura > 30 && clima === 'sol') {
    console.log( ' use protetor solar')
} else {
    console.log( ' clima estável '); 
} 