const leitor = require('prompt-sync')();
const exibirMenu = () => {
    console.log('ESCOLHA UMA OPÇAO');
    console.log('1 - CADASTRAR PARTIDA');
    console.log('2 - LISTAR PARTIDAS');
    console.log('3 - EXIBIR SALDO DE GOLS DOS MANDANTES');
    console.log('0 - SAIR');
};
const cadastrarpartida = (partidas) => {
    let nomemandante = leitor('Nome do mandante: ');
    let nomevisitante = leitor(' Nome visitante: ');
    let golsmandantes = parseFloat(leitor('Gols mandantes'));
    let golsvisitantes = parseFloat(leitor('Gols visitantes'));
    partidas.push({ nomemandante, nomevisitante, golsmandantes, golsvisitantes });
}

const listarpartida = (partidas) => {
    for (let i = 0; i < partidas.length; i++) {
        const partida = partidas[i];
        console.log(' nome do mandante: ' + partida.nomemandante);
        console.log('Nome visitante:' + partida.nomevisitante);
        console.log('Gols mandantes' + partida.golsmandantes);
        console.log('Gols visitantes' + partida.golsvisitantes);
    }
}
const exibirsaldodegolsdosmandantes = (partidas) => {
    let acumulador = 0
    for (let i = 0; i < partidas.length; i++) {
        let saldo = partidas[i].golsmandantes - partidas[i].golsvisitantes
        acumulador += saldo
    }
    console.log(acumulador)
    }





module.exports = { exibirMenu, cadastrarpartida, listarpartida,exibirsaldodegolsdosmandantes};  