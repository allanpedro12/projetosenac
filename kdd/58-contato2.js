let contato = {
    nome: '',
    telefone: 0,
    email:''
}; 

contato.nome = leitor('Digite um nome: '); 
contato.telefone = leitor('Digite um telefone: '); 
contato.email = leitor('Digite um email: ');
console.log(contato);

