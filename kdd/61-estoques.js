const leitor = require('prompt-sync')();
let numero, produtos = [];

do {
    console.log('escolha uma das opçoes abaixo:');
    console.log(' 1- cadastrar produto');
    console.log(' 2- remover  produto');
    console.log(' 3- buscar produto');
    console.log(' 4- mostrar total estoque');
    console.log('0- sair');

    numero = parseInt(
        leitor('\nOPÇAO: ')
    );

    if (numero === 1) {

        let n = leitor('nome: ');
        let p = leitor('preço: ');
        let q = leitor('quantidade:');
        let produto = {
            nome: n,
            preço: p,
            quantidade: q
        };
        produtos.push(produto);
        console.log('PRODUTO CADASTRADO COM SUCESSO! ');

    } else if (numero === 2) {
        let busca = leitor('Digite a sua busca: ');
        for (let i = 0; i < produtos.length; i++) {
            let nomeProduto = produtos[i].nome;
            if (nomeProduto.includes(busca)) {
                produtos.splice(i, 1);
                console.log(' PRODUTO REMOVIDO!');
            }
        }
    } else if (numero === 3) {
        let busca = leitor('Digite a sua busca: ');
        for (let i = 0; i < produtos.length; i++) {     
            console.log(produtos[i])
            let nomeProduto = produtos[i].nome;
            if (nomeProduto.includes(busca)) {
                console.log(' BUSCAR PRODUTO');
                produtos[i].preço;  
            }
        }
    } else if( numero === 4) {
      let  estoque = 0;
        for(let i = 0; i < produtos.length; i++) {
         estoque += produtos[i].quantidade;  
        }
        consolole.log( estoque);
    } else if(numero === 0) {
        console.log( ' OBRIGADO POR CONFERIR O ESTOQUE!'); 
    }
} while (numero !== 0); 
