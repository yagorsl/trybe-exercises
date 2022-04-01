// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (index = 0; index < numbers.length; index += 1) {
  result = result + numbers[index];
};

let average = result / numbers.length;

console.log(average);

// solução alternativa com for/of: (comentar da linha 6 a 12 antes de executar o código)
// for (number of numbers) {
//   result = result + number;
// };

// let average = result / numbers.length;

// console.log(average);
