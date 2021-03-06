// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ladoA = 100;
const ladoB = 50;
const ladoC = 20;

if ((ladoA + ladoB + ladoC) > 180) {
  console.log("Soma dos lados maior que 180. Não é um triângulo");
} else if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
  console.log("Inválido. Um dos ângulos é negativo");
} else if ((ladoA + ladoB + ladoC) === 180) {
  console.log(true);
} else {
  console.log(false);
}

// Solução alternativa
const angleA = 100;
const angleB = 50;
const angleC = 20;

const sumOfAngles = angleA + angleB + angleC;
const allAnglesArePositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesArePositive) {
  if (sumOfAngles === 180) {
    console.log(true)
  } else {
    console.log(false)
  };
} else {
  console.log("Erro: ângulo inválido");
};

// solulção utilizando funções
function isTriangle(angleA, angleB, angleC) {
  let allAnglesArePositive = angleA > 0 && angleB > 0 && angleC > 0;
  let sumOfAngles = angleA + angleB + angleC;

  if (allAnglesArePositive) {
    if (sumOfAngles === 180) {
      return true
    } else {
      return false;
    }
  } else {
    return 'Erro. Ângulo inválido';
  };
};

console.log(isTriangle(100, 50, -40));

// solução alternativa;
function triangle(angleA, angleB, angleC) {
  if (angleA < 0 || angleB < 0 || angleC < 0) {
    return 'Erro. Ângulo inválido';
  } else if (angleA + angleB + angleC === 180) {
    return true;
  } else {
    return false;
  };
};

console.log(triangle(100, 50, -40));
