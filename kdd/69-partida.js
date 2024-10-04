const leitor = require('prompt-sync')();
const biblioteca = require('./69-biblioteca');
let opçao, partidas = [];


do {
    biblioteca.exibirMenu();
    opçao = parseInt(leitor('Digite a opçao: '));
    switch (opçao) {
        case 1:
            console.log('Cadastrar partida');
            biblioteca.cadastrarpartida(partidas);
            break;
        case 2:
            console.log(' Listar partidas');
            biblioteca.listarpartida(partidas);
            break;
        case 3:
            console.log(' Exibir saldo de gols dos mandantes');
            biblioteca.exibirsaldodegolsdosmandantes(partidas);
            break;

        case 0:
            console.log('Sair');
            break;
        default:
            console.log('opçao invalida');
    }
} while (opçao !== 0);  