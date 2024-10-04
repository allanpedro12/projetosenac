const leitor = require('prompt-sync')();

let quantidade = parseInt(
    leitor(
        'quantos contatos deseja cadastrar?'
    ) 
);

let contatos = [];

for ( let i = 0; i < quantidade; i++) {
    console.log('Contato #' + (i+1)); 
    let nome = leitor('nome: ');
    let telefone = leitor('telefone: ');
    let email = leitor('email ');
    let contato = {
        nome: nome,
        telefone: telefone,
        email: email
    }; 
    contatos.push(contato); 
} 
console.log(contatos); 
for ( let i = 0; i < quantidade; i++) {
    let pessoa = contatos [i]; 
    let idade = parseInt(
        leitor( 'informe a idade de ' + pessoa.nome + ': ' )
    );
    pessoa.idade = idade; 
}
console.log( contatos);

let media, acumulador =0;
for(let i = 0; i < contatos.length; i++) {
    let pessoa = contatos[i]; 
    acumulador += pessoa.idade; 

}
media = acumulador / contatos.length;

console.log('MÉDIA de idade: ' + media); 

let maioridade = 18; 

for ( let i = 0; i < quantidade; i++) {
    let pessoa = contatos[i]; 
    if( pessoa.idade < 18) {
        console.log( pessoa.nome + 'é menor de idade'); 
    }
}