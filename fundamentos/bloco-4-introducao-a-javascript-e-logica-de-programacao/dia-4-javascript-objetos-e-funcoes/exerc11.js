// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function higherIndex(array) {
  let indiceMaior = 0;
  for (let index in array) {
    if (array[indiceMaior] > array[index]) {
      indiceMaior = index;
    };
  };
  return indiceMaior;
};

console.log(higherIndex([2, 4, 6, 7, 10, 0, -3]));