// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const num1 = 21;
const num2 = 31;
const num3 = 47;

if ((num1 % 2) === 0 || (num2 % 2) === 0 || (num3 % 2) === 0) {
  console.log(true);
} else {
  console.log(false);
}

// usa-se o operador % para verificar se o resto da divisão por 2 é 0. Essa é a condição para um número ser par.

// Solução alternativa utilizando apenas um if:
const firstNumber = 40;
const secondNumber = 34;
const thirdNumber = 23;

let isEven = false;

if ((num1 % 2) === 0 || (num2 % 2) === 0 || (num3 % 2) === 0) {
  isEven = true;
}

console.log(isEven);