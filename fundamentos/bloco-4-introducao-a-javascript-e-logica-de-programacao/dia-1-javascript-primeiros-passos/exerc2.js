// Faça um programa que retorne o maior de dois números. Utilize funções.

function higherNumber(a, b) {
  if (a > b) {
    return a + ' é maior que ' + b;
  } else if (b > a) {
    return b + ' é maior que ' + a;
  } else {
    return 'Os números são iguais'
  };
};

console.log(higherNumber(20, 10));
