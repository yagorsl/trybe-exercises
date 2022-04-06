// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true;
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false;

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  if (reversedString === string) {
    return true;
  } else {
    return false;
  };
};

console.log(isPalindrome('natan'));

// A linha 9 separa a string letra a letra usando o metodo split('') e cria um array com as letras da string separada; Retorna ['s', 't', r', 'i', 'n', 'g'];
// depois ela inverte a ordem desse array usando o reverse(); Retorna ['g', 'n', 'i', 'r', 't', 's'];
// depois une novamente as letras do array em uma só string, já invertida, utilizando o join(''); Retorna [gnirts];
