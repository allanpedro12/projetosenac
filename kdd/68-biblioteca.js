const leitor = require('prompt-sync')();
const exibirMenu = () => {
    console.log('ESCOLHA UMA OPÇAO');
    console.log('1 - FAZER APOSTA');
    console.log('2 - EXIBIR APOSTAS');
    console.log('3 - CASH OUT');
    console.log(' 4 - TOTAL APOSTAS');
    console.log('0 - SAIR');
};
const fazerAposta = (apostas) => {
    let nome = leitor('Nome do apostador: ');
    let motivo = leitor(' Motivo: ');
    let valor = parseFloat(leitor('Valor'));
    apostas.push({ nome, motivo, valor });
}


const exibirApostas = (apostas) => {
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i];
        console.log(' nome: ' + aposta.nome);
        console.log('Motivo:' + aposta.motivo);
        console.log('Valor: R$' + aposta.valor);
    }
}

const cashOut = (apostas) => {
    let nome = leitor('Digite o nome do apostador')
    for (let i = 0; i < apostas.length; i++) {
        let aposta = apostas[i];
        if (aposta.nome.includes(nome)) {
            apostas.splice(i, 1);
            console.log('Cash out realizado');
        }
    }
}

const totalapostas = (apostas) => {
let acumulador = 0
for (let i = 0; i < apostas.length; i++) {
    acumulador += apostas[i].valor;
    console.log( acumulador)
}
}
module.exports = { exibirMenu, fazerAposta, exibirApostas, cashOut, totalapostas};  