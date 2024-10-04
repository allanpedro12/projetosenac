const translate = require('translate-google');

let idioma = process.argv[2]; 

translate(
    'Ola mundo',
    {
        from: 'pt', 
        to: idioma
    }
). then( resposta => {
    console.log( resposta);
}); 