const leitor = require('prompt-sync')();
const biblioteca = require('./68-biblioteca');
let opçao, apostas = [];


do {
    biblioteca.exibirMenu();
    opçao = parseInt(leitor('Digite a opçao: '));
    switch (opçao) {
        case 1:
            console.log('Realizar aposta');
            biblioteca.fazerAposta(apostas);
            break;
        case 2:
            console.log('Exibir aposta');
            biblioteca.exibirApostas(apostas);
            break;
        case 3:
            console.log('Cash out');
            biblioteca.cashOut(apostas);
            break;
        case 4:
            console.log(' Total de apostas');
            biblioteca.totalapostas(apostas);
            
        case 0:
            console.log('Sair');
            break;
        default:
            console.log('opçao invalida');
    }
} while (opçao !== 0);  