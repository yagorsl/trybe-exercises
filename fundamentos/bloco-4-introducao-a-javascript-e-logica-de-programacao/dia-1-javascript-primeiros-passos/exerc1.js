// Faça cinco programas, um para cada operação aritmética básica. Faça programas para adição, subtração, multiplicação, divisão, módulo.
// Utilize funções;

function sum(a, b) {
  let result = a + b;
  return 'O resultado é: ' + result;
};

function subtraction(a, b) {
  let result = a - b;
  return 'O resultado é: ' + result;
};

function multiplication(a, b) {
  let result = a * b;
  return 'O resultado é: ' + result;
};

function division(a, b) {
  let result = a / b;
  return 'O resultado é: ' + result;
};

function module(a, b) {
  let result = a % b;
  return 'O resultado é: ' + result;
};

console.log(sum(20, 10));
console.log(subtraction(20, 10));
console.log(multiplication(20, 10));
console.log(division(20, 10));
console.log(module(20, 10));
