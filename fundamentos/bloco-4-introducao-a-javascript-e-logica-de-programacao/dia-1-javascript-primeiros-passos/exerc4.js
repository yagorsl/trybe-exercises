// Faça um programa que, dado um valor definido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. Utilize funções;

function isPositive(number) {
  if (number > 0) {
    return number + ' é um número positivo';
  } else if (number < 0) {
    return number + ' é um número negativo';
  } else {
    return number + ' é zero';
  };
};

console.log(isPositive(40));
