const progress = require('progress'); 
const barra = new progress (':bar', { total:20 }); 
const timer = setInterval( 
    function() {
        barra.tick (); 
        if ( barra.complete) {
            console.log(' FIM'); 
            clearInterval(timer);
        }
    },
    20
);   