// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function biggerWord(array) {
  let maiorPalavra = array[0];

  for (index in array) {
    if (maiorPalavra.length < array[index].length) {
      maiorPalavra = array[index];
    };
  };

  return maiorPalavra;
};

console.log(biggerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
