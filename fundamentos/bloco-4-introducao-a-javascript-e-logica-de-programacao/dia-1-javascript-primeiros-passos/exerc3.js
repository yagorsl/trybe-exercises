// Faça um programa que retorne o maior de três números. Utilize funções;

function higherNumber(a, b, c) {
  if (a > b && a > c) {
    return a + ' é o maior número';
  } else if (b > a && b > c) {
    return b + ' é o maior número';
  } else if (c > a && c > b) {
    return c + ' é o maior número';
  } else {
    return 'Os números são iguais';
  };
};

console.log(higherNumber(70, 70, 70));
