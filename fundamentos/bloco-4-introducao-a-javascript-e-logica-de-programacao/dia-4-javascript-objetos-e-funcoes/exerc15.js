// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    };
  };

  return result;
};

console.log(verificaFimPalavra('trybe', 'be'));

// solução alternativa
function verificaFinalPalavra(palavra, fimPalavra) {
  let splitedPalavra = palavra.split('');
  let splitedFimPalavra = palavra.split('');
  let controle = true;

  for (index = 0; index < splitedFimPalavra.length; index += 1) {
    if (splitedPalavra[splitedPalavra.length - splitedFimPalavra.length + index] !== fimPalavra[index]) {
      result = false;
    };
  };

  return controle;
};

console.log(verificaFinalPalavra('trybe', 'be'));
