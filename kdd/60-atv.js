const leitor = require('prompt-sync')();
let n, contatos = [];

do {


    console.log('escolha uma das opçoes abaixo:');
    console.log(' 1- cadastrar contato');
    console.log(' 2- remover  contato');
    console.log(' 3- atualizar telefone ao contato');
    console.log('4- listar todos os contatos');
    console.log(' 5- buscar copntato por nome');
    console.log('0- sair');

    n = parseInt(
        leitor('\nOPÇAO: ')
    );

    if (n === 1) {
        let nome = leitor('nome: ');
        let telefone = leitor('telefone: ');
        let email = leitor('email ');
        let contato = {
            nome: nome,
            telefone: telefone,
            email: email
        };
        contatos.push(contato);
        console.log(' CONTATO CADASTRADO COM SUCESSO! ');
    } else if (n === 2) {
        let busca = leitor( 'Digite a sua busca: '); 
        for(let i = 0; i < valores.length; i++) {
            let nomeContato = contatos[i].nome; 
            if( nomeContato.includes(busca)) {
                console.log(' CONTATO ENCONTRADO'); 
            contatos.splice( i, 1); 
                console.log( ' CONTATO REMOVIDO!'); 
            }
        } 
    } else if (n === 3) {
        let busca = leitor( 'Digite a sua busca: '); 
        for(let i = 0; i < valores.length; i++) {
            let nomeContato = contatos[i].nome; 
            if( nomeContato.includes(busca)) {
                console.log(' CONTATO ENCONTRADO'); 
                let t = leitor(' Digite o novo telefone: '); 
                contatos[i].telefone = t;  
                console.log( ' CONTATO ATUALIZADO!'); 
            }
        }  
    } else if (n === 4) {
        for(let i = 0; i < contatos.length; i++) {
            console.log( 'CONTATO #' + (i+i));
            console.log( 'Nome: ' + contatos[i].nome); 
            console.log( 'E-mail: ' + contatos[i].email);
            console.log( 'Telefone: ' + contatos[i].telefone); 
        }
        console.log( 'FIM DA LISTA!'); 
    } else if (n === 5) {
     let busca = leitor( 'Digite a sua busca: '); 
     for(let i = 0; i < valores.length; i++) {
        let nomeContato = conyatos[i].nome;
        if( nomeContato.includes(busca)) {
            console.log( 'contatos encontrados');
            console.log( 'Nome: ' + contatos[i].nome); 
            console.log( 'E-mail: ' + contatos[i].email);
            console.log( 'Telefone: ' + contatos[i].telefone); 
        }
     }
    } else if (n === 0) {
        console.log('BYE BYE');
    } else {
        console.log('ERRO: OPÇAO INVALIDA');
    }
} while (n !== 0);
 

