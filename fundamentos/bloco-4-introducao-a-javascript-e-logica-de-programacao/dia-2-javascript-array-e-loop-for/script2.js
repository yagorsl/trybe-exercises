// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (index = 0; index < numbers.length; index += 1) {
  result = result + numbers[index];
};

console.log(result);

// solução alternativa com for/of: (comentar da linha 3 a 10 antes de executar o código)

for (number of numbers) {
  result = result + number;
};

console.log(result);
