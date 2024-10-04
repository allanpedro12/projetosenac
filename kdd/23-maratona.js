let  temperatura;
temperatura = -2;

if( temperatura < 0 &&  'Congelante') {
    console.log( ' com a temperatura de ' + temperatura + 'o resultado é: congelante' ); 
} else if ( temperatura  >= 0 &&
     temperatura <= 15) {
        console.log(   ' com a temperatura de ' + temperatura + ' o resultado é: frio'); 
     } else if ( 
        temperatura  >= 16 && 
        temperatura <= 25 ) {
            console.log(   ' com a temperatura  de ' + temperatura +  'o resultado é: Ameno');
        } else if ( temperatura  >= 26 &&
        temperatura <= 35 ) {
            console.log(   ' com a temperatura de ' + temperatura +  'o resultado é: Quente'); 
        } else if( temperatura >= 35 ) {
                console.log(  ' com a temperatura de ' + temperatura + 'o resultado é: Muito quente'); 
            } 
    
        
 