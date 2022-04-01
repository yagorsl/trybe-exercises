// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

// O valor da variavel higherNumber poderia ser qualquer, desde que fosse menor do que o maior numero do array numbers. Caso fosse atribuído o valor 101, por exemplo, o loop for nunca encontraria um valor maior que 101 no array, pois o maior número é o 100;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] >= higherNumber) {
    higherNumber = numbers[index];
  };
};

console.log(higherNumber);

// solução alternativa usando o for/of:
for (number of numbers) {
  if (number >= higherNumber) {
    higherNumber = number;
  };
};

console.log(higherNumber);
