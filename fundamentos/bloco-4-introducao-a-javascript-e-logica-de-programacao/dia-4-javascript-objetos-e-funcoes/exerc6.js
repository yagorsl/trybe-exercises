// Usando o objeto abaixo, faça os exercícios a seguir:
// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let phrase = 'O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"';
console.log(phrase);

// solução alternativa;
let sentence = 'O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + '"' + leitor['livrosFavoritos'][0]['titulo'] + '"';
console.log(sentence);
