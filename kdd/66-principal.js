const leitor = require('prompt-sync')();
 const biblioteca = require ( './66-numeros'); 

quantidade = parseInt(leitor(' Digite um número:')); 

biblioteca.imprimirnumeros(quantidade); 

