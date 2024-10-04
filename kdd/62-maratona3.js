const leitor = require('prompt-sync')();
let numero, funcionarios = [];
do {


    console.log('\n\n\sistema RH');
    console.log('escolha uma das opçoes abaixo:');
    console.log(' 1- cadastrar funcionario');
    console.log(' 2- atualizar cargo do funcionario');
    console.log(' 3- buscar funcionario por nome');
    console.log(' 4- buscar funcionario por CPF ');
    console.log(' 5-remover funcionario    :');
    console.log(' 6- exibir custo total de RH da empresa');
    console.log(' 7- exibir o custo total de RH da empresa');
    console.log(' 8-exibir custo dos funcionarios de cargo motorista');
    console.log('0- sair');

    numero = parseInt(
        leitor('\nOPÇAO: '));

    if (numero === 1) {
        let n = leitor('nome: ');
        let CPF = leitor('CPF: ');
        let s = leitor('Salario: ');
        let c = leitor("Cargo: ");
        let funcionario = {
            nome: n,
            CPF: CPF,
            Salario: s,
            Cargo: c
        };
        funcionarios.push(funcionario); 
        console.log("funcionario cadastrado com sucesso!")
    } else if (numero === 2) {
        let busca = leitor('Digite a sua busca: ');

        for (let i = 0; i < funcionarios.length; i++) {
            let nomefuncionario = funcionarios[i].nome;
            if (nomefuncionario.includes(busca)) {
                console.log('Cargo encontrado');
                let c = leitor('Digite o novo cargo: ');
                funcionarios[i].Cargo = c;
                console.log('cargo atualizado!');
            }
        }
    } else if (numero === 3) {
        let busca = leitor('Digite a sua busca: ');

        for (let i = 0; i < funcionarios.length; i++) {
            let nomefuncionario = funcionarios[i].nome;
            if (nomefuncionario.includes(busca)) {
                console.log('Salario encontrado');
                let s = leitor('Digite o novo salario: ');
                funcionarios[i].Salario = s;
                console.log('salario atualizado!');
            }
        }
    } else if (numero === 4) {
        let busca = leitor('Digite a sua busca: ');
        for (let i = 0; i < funcionarios.length; i++) {
            console.log(funcionarios[i])
            let nomefuncionario = funcionarios[i].nome;
            if (nomefuncionario.includes(busca)) {
                console.log(' Buscar Funcionario');
                funcionarios[i].nome;

            }
        }
    } else if (numero === 5) {
        let busca = leitor('Digite a sua busca: ');
        for (let i = 0; i < funcionarios.length; i++) {
            console.log(funcionarios[i])
            let nomeCPF = funcionarios[i].CPF;
            let nomefuncionarios = funcionarios[i].Salario;
            if (nomeCPF.includes(busca)) {
                console.log(' Buscar Funcionario por CPF');
                funcionarios[i].CPF;

            }
        }
    }
} while (numero !== 0); 